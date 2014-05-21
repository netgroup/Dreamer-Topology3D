if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.GraphParameters = (function (global) {
    'use strict';

    function GraphParameters (data) {
        this.tunneling = "";

              
    }

    GraphParameters.prototype.setTunneling = function (tuntype) {
        this.tunneling = tuntype;
        
    };

    return GraphParameters;
}());

if (typeof module === 'object') {
    module.exports = dreamer.GraphParameters;
}