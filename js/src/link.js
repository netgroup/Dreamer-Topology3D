if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Link = (function (global) {
    'use strict';

    function Link (edge_label, layer) {

        this.edge_label = edge_label;
        this.layer = layer;
    }

    Link.prototype.setLayer = function (layer) {
        this.layer = layer;
    };

    Link.prototype.getLayer = function () {
        return this.layer;
    };

    return Link;
}());

if (typeof module === 'object') {
    module.exports = dreamer.Link;
}