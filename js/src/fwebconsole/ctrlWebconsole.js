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
      
        // create the tab
        $('<li><a href="#tab'+nextTab+'" data-toggle="tab">'+nextTab+'</a></li>').appendTo('#'+self._div);
    
        // create the tab content
        if(active)
            $('<div class="tab-pane terminal active" id="tab'+nextTab+'"></div>').appendTo('#myTabContent');
        else
            $('<div class="tab-pane fade terminal" id="tab'+nextTab+'"></div>').appendTo('#myTabContent');


        // make the new tab active
        $('#tabs a:last').tab('show');
    }

    function removeTab(self, tabname){
        $('#tab'+tabname).remove();
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

    Ctrlfwc.prototype.closeAll = function() {
        console.log("Ctrlfwc.prototype.close", this._consoles_name.length);
        var self = this;
        this._consoles_name.forEach(function(name, index, array){
            console.log("console index", index, name);
            self._consoles[name].disconnect();
            self.removeConsole(name)
        });
        this._consoles = null;
        
        $('#'+this._div).empty();
        
    };

    return Ctrlfwc;
}());

if (typeof module === 'object') {
    module.exports = dreamer.Ctrlfwc;
}

