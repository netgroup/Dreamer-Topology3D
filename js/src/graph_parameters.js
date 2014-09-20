if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.GraphParameters = (function (global) {
    'use strict';

    function GraphParameters (data) {

        if(data != undefined){
            if(data.tunneling != undefined)
                this.tunneling = data.tunneling;
            else
                this.tunneling = "";

            if(data.graphname != undefined)
                this.graphname = data.graphname;
        }
        

    }

    GraphParameters.prototype.setTunneling = function (tuntype) {
        this.tunneling = tuntype;
        
    };

    GraphParameters.prototype.setGraphName = function (name) {
        this.graphname = name;
        
    };

    return GraphParameters;
}());

if (typeof module === 'object') {
    module.exports = dreamer.GraphParameters;
}