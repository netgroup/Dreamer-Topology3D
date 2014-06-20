if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Plane = (function (global) {
    'use strict';
    var dataplane = "dataplane",
    vllplane = "vllplane",
    controlplane = "controlplane";

    function Plane () {
        this.currentplane = dataplane;
    }

    Plane.prototype.setDataPlane = function (){
        this.currentplane = dataplane;
    };

    Plane.prototype.setControlPlane = function (){
        this.currentplane = controlplane;
    };

    Plane.prototype.setVllPlane = function (){
        this.currentplane = vllplane;
    };

    Plane.prototype.getCurrentPlane = function (){
        return this.currentplane;
    };

    Plane.prototype.isDataPlane = function (){
        return (this.currentplane == dataplane) ? true : false;
    };

    Plane.prototype.isControlPlane = function (){
        return (this.currentplane == controlplane) ? true : false;
    };

    Plane.prototype.isVllPlane = function (){
        return (this.currentplane == vllplane) ? true : false;
    };


    return Plane;
}());

if (typeof module === 'object') {
    module.exports = dreamer.Plane;
}