if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Ctrlfwc = (function(global) {
    'use strict';


    function Ctrlfwc(div, expname) {
        this._div = div;
        this._expname = expname;
        this._consoles = {};
        this._consoles_name = [];
    }

    function addTab (self, nextTab, active) {
      
       
        // create the tab content
        if(active){
             // create the tab
            $('<li id="tab_label_'+ nextTab + '" class="active"><a href="#tab'+nextTab+'" data-toggle="tab">'+nextTab+'<span>  <i class="fa fa-times" id="close_'+ nextTab + '" style="cursor: pointer;"></i></span></a></li>').appendTo('#'+self._div);
   
            $('<div class="tab-pane terminal active" id="tab'+nextTab+'"></div>').appendTo('#myTabContent');
        }else{
            $('<li id="tab_label_'+ nextTab + '"><a href="#tab'+nextTab+'" data-toggle="tab">'+nextTab+'<span>  <i class="fa fa-times" id="close_'+ nextTab + '" style="cursor: pointer;"></i></span></a></li>').appendTo('#'+self._div);
            $('<div class="tab-pane fade terminal" id="tab'+nextTab+'"></div>').appendTo('#myTabContent');
        
        }
        var close_click = function(event){
            $('#close_'+nextTab).off("click", close_click);
            console.log("click close", nextTab);
            self.closeConsole(nextTab);
        };

        $('#close_'+nextTab).on("click", close_click);

    }

    function removeTab(self, tabname){
        $('#tab'+tabname).remove();
        $('#tab_label_'+tabname).remove();
    }
  
    Ctrlfwc.prototype.addConsole = function(nodeid, active) {
        if(this._consoles[nodeid] == undefined){
            addTab(this, nodeid, active);
            var newconsole = new dreamer.Fwc('#tab'+nodeid, nodeid, this._expname);
            this._consoles_name.push(nodeid);
            this._consoles[nodeid]= newconsole;
            console.log("addConsole", this._consoles_name.length);
        }

    };

    Ctrlfwc.prototype.removeConsole = function(nodeid) {
        if(this._consoles[nodeid] != undefined){
            removeTab(this, nodeid);
            this._consoles[nodeid] = null;
        }

    };

    Ctrlfwc.prototype.closeConsole = function (nodeid){
        this._consoles[nodeid].disconnect();
        this.removeConsole(nodeid);
    }

    Ctrlfwc.prototype.closeAll = function() {
        console.log("Ctrlfwc.prototype.close", this._consoles_name.length);
        var self = this;
        this._consoles_name.forEach(function(name, index, array){
            console.log("console index", index, name);
            self._consoles[name].disconnect();
            self.removeConsole(name);
        });
        this._consoles = null;
        
        $('#'+this._div).empty();
        
    };

    return Ctrlfwc;
}());

if (typeof module === 'object') {
    module.exports = dreamer.Ctrlfwc;
}

