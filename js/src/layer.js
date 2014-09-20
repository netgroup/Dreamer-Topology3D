if (typeof dreamer === 'undefined') {
    var dreamer = {};
}


dreamer.CurLayer = (function (global) {
    'use strict';
  

    function CurLayer () {
        this.currentlayer = "Data";
    }

    CurLayer.prototype.setCurLayer = function (currentlayer){
        this.currentlayer = currentlayer;
    };


    CurLayer.prototype.getCurLayer = function (){
        return this.currentlayer;
    };



    return CurLayer;
}());

if (typeof module === 'object') {
    module.exports = dreamer.CurLayer;
}