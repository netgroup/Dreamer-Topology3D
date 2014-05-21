if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.GraphParameters = (function (global) {
    'use strict';

    function GraphParameters () {
        this.tunneling = "";      
    }

    GraphParameters.prototype.tunneling = function (tuntype) {
        this.tunneling = tuntype;
    };

    return GraphParameters;
}());

if (typeof module === 'object') {
    module.exports = dreamer.GraphParameters;
}