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

            if(data.vlan != undefined)
                this.vlan = data.vlan
            else
                this.vlan = 0

            if(data.mapped != undefined)
                this.mapped = data.mapped
            else
                this.mapped = false

            if(data.generated != undefined)
                this.generated = data.generated
            else
                this.generated = false

            if(data.testbed != undefined)
                this.testbed = data.testbed
            else
                this.testbed = "MININET"
        }
        

    }

    GraphParameters.prototype.setTunneling = function (tuntype) {
        this.tunneling = tuntype;
        
    };

    GraphParameters.prototype.setTestBed = function (testbed) {
        this.testbed = testbed;
        
    };

    GraphParameters.prototype.setGraphName = function (name) {
        this.graphname = name;
        
    };

    return GraphParameters;
}());

if (typeof module === 'object') {
    module.exports = dreamer.GraphParameters;
}