if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Edge = (function (global) {
    'use strict';

    // Constructor
    function Edge(node1, node2, multi, label) {
        this.node1 = node1;
        this.node2 = node2;
        this.multi = multi || 1;
        // this.label = label || '::';
        this.vll = false;
        if (label) {
            this.edge_info = label;
        } else
            this.edge_info = new Edge_info("", "", "");
    }

    Edge.prototype.is_touching = function (node) {
        return node === this.node1 || node === this.node2;
    };

    Edge.prototype.is_loop = function (node) {
        return node === this.node1 && node === this.node2;

    };
    Edge.prototype.connects_to = function (node) {
        var neighbor;
        if (this.node1 === node) {
            neighbor = this.node2;
        }
        if (this.node2 === node) {
            neighbor = this.node1;
        }
        return neighbor;
    };
    Edge.prototype.get_nodes = function () {
        return {
            node1: this.node1,
            node2: this.node2
        };
    };

    Edge.prototype.set_vll = function () {
        this.edge_info.vll = true;
    };


    var Edge_info = function (edge_label, labe_to_node1, labe_to_node2, vll) {
        this.labe_to_node1 = labe_to_node1;
        this.labe_to_node2 = labe_to_node2;
        this.edge_label = edge_label;
        this.vll = vll || false;
    };


    return Edge;

}(this));

if (typeof module === 'object') {
    module.exports = dreamer.Edge;
}