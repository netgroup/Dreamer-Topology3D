if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Vertex = (function (global) {
    'use strict';
    // Constructor
    function Vertex(nodes, pos, label, node_properties) {
        this.pos = pos ? Point(pos.x, pos.y) : Point();
        this.v = Point();
        if (node_properties)
            this.info = node_properties;
        else
            this.info = {frozen: false}; //new info("", false);

        this.label = label || next_label(nodes);
    }

    Vertex.prototype.node_loop_angle = function (edge_list) {
        var angles = [],
            angle = 0,
            i, diff, bestdiff = 0,
            edge, npos, thispos = this.pos,
            neighbors_list = neighbors_of(this,edge_list);
        angles = neighbors_list.map(function (node) {
            var npos = node.get_pos();
            return Math.atan2(-npos.y + thispos.y, npos.x - thispos.x);
        });
        angles.sort(sort_num);
        for (i = 0; i < angles.length - 1; i += 1) {
            diff = angles[i + 1] - angles[i];
            if (diff > bestdiff) {
                angle = angles[i] + diff / 2;
                bestdiff = diff;
            }
        }
        diff = Math.PI * 2 + angles[0] - angles[angles.length - 1];
        if (diff > bestdiff) {
            angle = angles[angles.length - 1] + diff / 2;
        }
        return angle;
    };

    Vertex.prototype.vector_from = function (v) {
        return {
            x: this.pos.x - v.x,
            y: this.pos.y - v.y
        };
    };
    Vertex.prototype.change_vel = function (deltax, deltay) {
        if (!this.info.frozen) {
            this.v.x += deltax;
            this.v.y += deltay;
        }
    };
    Vertex.prototype.get_pos = function () {
        return this.pos;
    };
    Vertex.prototype.set_pos = function (new_pos) {
        this.pos = new_pos;
    };
    Vertex.prototype.toggle_freeze = function () {
        this.info.frozen = !this.info.frozen;
    };
    Vertex.prototype.get_frozen = function () {
        return this.info.frozen;
    };
    Vertex.prototype.run = function (SPEED) {
        this.pos.x += Math.min(Math.max(SPEED * this.v.x, -20), 20);
        this.pos.y += Math.min(Math.max(SPEED * this.v.y, -20), 20);
        this.v.x *= 0.5;
        this.v.y *= 0.5;
    };

    Vertex.prototype.getVertexInfo = function () {
        return this.info;
    };



   Vertex.prototype.getType = function () {
        return this.info['type'];
    };
/* 
    Vertex.prototype.setType = function (type) {
        this.info.type = type;
    };
    Vertex.prototype.getLoopback = function () {
        return this.info.loopback;
    };

    Vertex.prototype.setLoopback = function (loopback) {
        this.info.loopback = loopback;
    };


    var info = function (vertinfo) {
        this.frozen = vertinfo.frozen;
        this.loopback = vertinfo.loopback;
        this.type = vertinfo.type;
    };*/


    return Vertex;

}(this));

if (typeof module === 'object') {
    module.exports = dreamer.Vertex;
}