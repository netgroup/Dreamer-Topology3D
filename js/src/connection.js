if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Connection = (function (global) {
    'use strict';

    function Connection (edge_label, vll) {

        this.edge_label = edge_label;
        this.vll = vll || false;
    }

    Connection.prototype.set_vll = function () {
        this.vll = true;
    };

    return Connection;
}());

if (typeof module === 'object') {
    module.exports = dreamer.Connection;
}