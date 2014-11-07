if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Fwc = (function(global) {
    'use strict';
    var timeout = 5000;
    var ws;
    var cmdHistory = [];
    var _channel;
    var _div;
    var _termoutput;
    var _cmd;
    var _clipboard;
    var _cursor;
    var _comando;

    function Fwc(div, channel) {
        _div = div;
        _channel = channel;
        _termoutput = "terminal-output-" + _channel;
        _cmd = "cmd-" + _channel;
        _comando = "comando"+_channel;
        _clipboard = "clipboard-" + _channel;
        _cursor = "#cursore";
        initTerminalOutput();
        initPromtLine();
        initWebSocket();
        initListeners();

    }

    function sendCmd(cmd, invisible) {
        if (cmd == 'clear') {
            //TODO aggiungere righe vuote e scalare
            //$('#log').html('');
            return;
        }
        try {

            if(invisible == undefined || invisible == false){
              cmdHistory.push(cmd);
              $('#' + _termoutput).append("<div style=\"width: 100%; visibility: visible;\"> >  " + cmd + "</div>");
            }
            ws.emit('cmd', cmd)
        } catch (err) {
            console.log(err);

        }
    }

    function initPromtLine() {
        $(_div).append("<div class=\"cmd\" id=\"" + _cmd + "\" style=\"width: 100%; visibility: visible;\"><span class=\"prompt\">&gt;&nbsp;</span><span id=\""+_comando+"\"></span><span id=\"cursore\" class=\"cursor blink\">&nbsp;</span><span></span><textarea class='clipboard' id=\"" + _clipboard + "\" ></textarea></div>");
    }

    function initTerminalOutput() {
        $(_div).append("<div class='terminal-output' id=\"" + _termoutput + "\"></div>");
        
    }

    function initListeners() {
        $("#" + _clipboard).on('change keyup paste', function() {
            console.log("change keyup paste");
            var cmd = $("#" + _clipboard).val().replace("\n", "");
            $("#"+_comando).text(cmd);
        });
        
        $("#" + _clipboard).keypress(function(e) {
            var cmd = $("#" + _clipboard).val().replace("\n", "");
            console.log(e);
            if (e.keyCode != 13) {
                console.log("!=13")
                 
                return;
            }
            else if(e.ctrlKey==true && e.charCode == 99){
                console.log("CTRL+C")
                sendCtrC();
            }
            else{
              
              if (!isBlank(cmd)) {
                sendCmd(cmd);
              }
              $("#" + _clipboard).val("");
            }
            
        });
        $("#" + _clipboard).bind('copy', function(e) {
            console.log("CTRL+C")
            e.preventDefault();
            sendCtrC();
        });
        $("#" + _clipboard).bind('cut', function(e) {
            console.log("CTRL+X")
            e.preventDefault();
        });
        $("#" + _clipboard).bind('undo', function(e) {
            console.log("CTRL+Z");
            e.preventDefault();
        });
        $("#" + _clipboard).blur(function() {
            console.log("BLURR");
           toggleCursor(false);
        });

        $(_div).click(function(e) {
            toggleCursor(true);
            $("#" + _clipboard).focus();
            return false;
        }); 

        
        
    }

    function toggleCursor(selected){
        if(selected){
            $(_cursor).addClass("blink");
        }else{
            $(_cursor).removeClass('blink');
        }
    }


    function sendCtrC(){
        sendCmd("\\x03", true);
    }
    function toStaticHTML(data) {
        data = data.toString();
        return data.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace("/n", "<br/>")
            .replace(/>/g, "&gt;");
    }

    function isBlank(text) {
        var blank = /^\s*$/;
        return (text.match(blank) !== null);
    }

    function initWebSocket() {
        console.log("initWebSocket")
        var host = "127.0.0.1";
        var port = ":3000"
        var base = host + ":3000"; 
        ws = io.connect("http://"+base);
        ws.on('connect', function() {
            console.log('connected to server');
        });
        ws.on('cmd_res', function(data) {

            var rows = data.split('\n');
            for (var r in rows) {
                console.log(rows[r]);
                $("#" + _termoutput).append("<div style=\"width: 100%; visibility: visible;\">" + toStaticHTML(rows[r]) + "</div>");
            }
             $(_div).scrollTop($(_div)[0].scrollHeight);
            
        });
        ws.on('disconnect', function() {
            //TODO  
        });
    }

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