if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Ctrlfwc = (function(global) {
    'use strict';

    var _consoles = [];

    var _div;
    var _termoutput;
    var _expname;

    function Ctrlfwc(div, expname) {
        _div = div;
        _expname = expname;
    }

    function addTab (nextTab) {
      
        // create the tab
        $('<li><a href="#tab'+nextTab+'" data-toggle="tab">'+nextTab+'</a></li>').appendTo('#'+_div);
    
        // create the tab content
        $('<div class="tab-pane fade terminal" id="tab'+nextTab+'">tab' +nextTab+' content</div>').appendTo('#myTabContent');
        
        // make the new tab active
        $('#tabs a:last').tab('show');
    }
  
    Ctrlfwc.prototype.addConsole = function(nodeid) {
        if(_consoles[nodeid] == undefined){
             addTab(nodeid);
            var newconsole = new dreamer.Fwc('#tab'+nodeid, nodeid, _expname);
            _consoles[nodeid]= newconsole;
        }

    };



    return Ctrlfwc;
}());

if (typeof module === 'object') {
    module.exports = dreamer.Ctrlfwc;
}

