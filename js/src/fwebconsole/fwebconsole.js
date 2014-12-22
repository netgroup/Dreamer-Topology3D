if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Fwc = (function(global) {
    'use strict';
    var timeout = 5000;
    // var ws;
    // var cmdHistory = [];
    // var _channel;
    // var _div;
    // var _termoutput;
    // var _cmd;
    // var _clipboard;
    // var _cursor;
    // var _comando;
    // var _expname;
    // var EventHandeler = dreamer.Event;
    // var eventHandeler;

    function Fwc(div, channel, expname) {
        this._div = div;
        this._channel = channel;
        this._expname = expname;
        this._termoutput = "terminal-output-" +channel;
        this._cmd = "cmd-" + channel;
        this._comando = "comando"+ channel;
        this._clipboard = "clipboard-" + channel;
        this._cursor = "#cursore-" + channel;
        this.cmdHistory = [];
        // eventHandeler = new EventHandeler();
        this.initTerminalOutput();
        this.initPromtLine();
        this.initWebSocket();
        this.initListeners();
            
        

    }

    Fwc.prototype.sendCmd =function(cmd, invisible) {
        if (cmd == 'clear') {
            //TODO aggiungere righe vuote e scalare
            //$('#log').html('');
            return;
        }

        if(cmd == 'join'){
            try {
                if(invisible == undefined || invisible == false){
                  this.cmdHistory.push(cmd);
                  $('#' + this._termoutput).append("<div style=\"width: 100%; visibility: visible;\"> >  " + cmd + "</div>");
                }
                if(this._channel == "deployment")
                    this.ws.emit('new-deploy-shell', {nodeid: this._channel});
                else
                    this.ws.emit('new-node-shell', {nodeid: this._channel});
            } catch (err) {
                console.log(err);

            }
        }
        else{
                console.log("send cmd: " + cmd + " " + this._channel);
                if(invisible == undefined || invisible == false){
                  this.cmdHistory.push(cmd);
                  $('#' + this._termoutput).append("<div style=\"width: 100%; visibility: visible;\"> >  " + cmd + "</div>");
                }
            try {

                this.ws.emit('cmd', {nodeid: this._channel, cmd: cmd});
            } catch (err) {

                console.log(err);

            }
        }

    };

    Fwc.prototype.initPromtLine = function() {
        $(this._div).append("<div class=\"cmd\" id=\"" + this._cmd + "\" style=\"width: 100%; visibility: visible;\"><span class=\"prompt\">&gt;&nbsp;</span><span id=\""+this._comando+"\"></span><span id=\"cursore\" class=\"cursor blink\">&nbsp;</span><span></span><textarea class='clipboard' id=\"" + this._clipboard + "\" ></textarea></div>");
    };

    Fwc.prototype.initTerminalOutput = function() {
        $(this._div).append("<div class='terminal-output' id=\"" + this._termoutput + "\"></div>");
        
    };

    Fwc.prototype.initListeners = function() {
        var self = this;
        $("#" + this._clipboard).on('change keyup paste', function() {
            console.log("change keyup paste");
            var cmd = $("#" + self._clipboard).val().replace("\n", "");
            $("#"+self._comando).text(cmd);
        });
        
        $("#" + this._clipboard).keypress(function(e) {
            var cmd = $("#" + self._clipboard).val().replace("\n", "");
            console.log(e);
            if (e.keyCode != 13) {
                console.log("!=13")
                 
                return;
            }
            else if(e.ctrlKey==true && e.charCode == 99){
                console.log("CTRL+C")
                self.sendCtrC();
            }
            else{
              
              if (!self.isBlank(cmd)) {
                self.sendCmd(cmd);
              }
              $("#" + self._clipboard).val("");
            }
            
        });
        $("#" + this._clipboard).bind('copy', function(e) {
            console.log("CTRL+C")
            e.preventDefault();
            self.sendCtrC();
        });
        $("#" + this._clipboard).bind('cut', function(e) {
            console.log("CTRL+X")
            e.preventDefault();
        });
        $("#" + this._clipboard).bind('undo', function(e) {
            console.log("CTRL+Z");
            e.preventDefault();
        });
        $("#" + this._clipboard).blur(function() {
            console.log("BLURR");
            self.toggleCursor(false);
        });

        $(this._div).click(function(e) {
            console.log("CLICKKKKKK")
            self.toggleCursor(true);
            $("#" + self._clipboard).focus();
            return false;
        }); 

        
        
    };

    Fwc.prototype.toggleCursor = function(selected){
        if(selected){
            $(this._cursor).addClass("blink");
        }else{
            $(this._cursor).removeClass('blink');
        }
    };


    Fwc.prototype.sendCtrC = function(){
        this.sendCmd("\\x03", true);
    };

    Fwc.prototype.toStaticHTML= function(data) {
        data = data.toString();
        return data.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace("/n", "<br/>")
            .replace(/>/g, "&gt;");
    }

    Fwc.prototype.isBlank = function(text) {
        var blank = /^\s*$/;
        return (text.match(blank) !== null);
    }

    Fwc.prototype.initWebSocket = function() {
        console.log("initWebSocket")
        var self = this;
        var host = "127.0.0.1";
        //var host = location.hostname;
        var port = ":3000";
        var base = host + ":3000";
        //var ns = _expname;
        var ns = "";
        var wsurl = "http://"+host+port+"/"+ns; 
        this.ws = io.connect(wsurl,{'force new connection': true});
        this.ws.on('connect', function() {
            console.log('@@@@ connected to server');
            
            self.sendCmd("join", true);
        });
        this.ws.on('cmd_res', function(data) {

            var rows = data.split('\n');
            for (var r in rows) {
                console.log(rows[r]);
                if(rows[r] != self.cmdHistory[self.cmdHistory.length-1]){
                                    
                                    if (self._channel != "deployment" ){
                                      //  if(r != rows.length -1 && r != 0){
						var str = self.toStaticHTML(rows[r]);
						if(str.indexOf("root@OSHI-VM:") == -1 ) 
                                            		$("#" + self._termoutput).append("<div style=\"width: 100%; visibility: visible;\">" + self.toStaticHTML(rows[r]) + "</div>");
                                       // }
                                    }
                                    else{
                                        console.log("deployment");
                                        $("#" + self._termoutput).append("<div style=\"width: 100%; visibility: visible;\">" + self.toStaticHTML(rows[r]) + "</div>");
                                    }
                }
            }
             $(self._div).scrollTop($(self._div)[0].scrollHeight);
            
        });
        this.ws.on('disconnect', function() {
            //TODO  
        });
    };

    Fwc.prototype.prova = function() {

    };


    return Fwc;
}());

if (typeof module === 'object') {
    module.exports = dreamer.Fwc;
}


//$(document).ready(function() {
//    var prova = new dreamer.Fwc('#wfconsole', 'prova');
//});