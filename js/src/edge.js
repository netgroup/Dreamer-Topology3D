if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Edge = (function (global) {
    'use strict';
    // Constructor
    function Edge(node1, node2, vll, connetion) {
        this.node1 = node1;
        this.node2 = node2;
        this.connections = [];
        
        if(connetion && (connetion instanceof Array)){
            this.connections = connetion;
        }
        else if (connetion && (typeof connetion  === "object")) {
            var val = (connetion.vll==null || connetion.vll===false) ? false: true;
            var edlab = (connetion.edge_label == null || connetion.vll === "") ? "": connetion.edge_label;
            this.connections.push( new dreamer.Connection("", val));
        } 
        else{
            var val = (vll==null || vll===false) ? false: true;
            this.connections.push( new dreamer.Connection("", val));
        }
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
    
    Edge.prototype.addConnection = function (edge_label, vll) {
       this.connections.push(new dreamer.Connection(edge_label, vll));
    };

    Edge.prototype.setConnecionList = function(conlist){
        if(conlist != undefined)
            this.connections = conlist.slice(0);
    }



    return Edge;

}(this));

if (typeof module === 'object') {
    module.exports = dreamer.Edge;
}