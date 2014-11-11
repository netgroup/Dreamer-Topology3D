if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Ctrlfwc = (function(global) {
    'use strict';


    function Ctrlfwc(div, expname) {
        this._div = div;
        this._expname = expname;
        this._consoles = [];
    }

    function addTab (self, nextTab) {
      
        // create the tab
        $('<li><a href="#tab'+nextTab+'" data-toggle="tab">'+nextTab+'</a></li>').appendTo('#'+self._div);
    
        // create the tab content
        $('<div class="tab-pane fade terminal" id="tab'+nextTab+'">tab' +nextTab+' content</div>').appendTo('#myTabContent');
        
        // make the new tab active
        $('#tabs a:last').tab('show');
    }
  
    Ctrlfwc.prototype.addConsole = function(nodeid) {
        if(this._consoles[nodeid] == undefined){
             addTab(this, nodeid);
            var newconsole = new dreamer.Fwc('#tab'+nodeid, nodeid, this._expname);
            this._consoles[nodeid]= newconsole;
        }

    };



    return Ctrlfwc;
}());

if (typeof module === 'object') {
    module.exports = dreamer.Ctrlfwc;
}

