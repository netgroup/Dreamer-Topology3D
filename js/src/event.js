if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.Event = (function (global) {
    'use strict';

    function Event (sender) {
        this._sender = sender;
        this._listeners = [];     
    }

    Event.prototype.attach = function (listener) {
        this._listeners.push(listener)
    };

    Event.prototype.notify = function (args) {
        var index;
        //console.log("Fire notify Event");
        for (index = 0; index < this._listeners.length; index += 1) {
            this._listeners[index](this._sender, args);
        }
    };

    return Event;
}());

if (typeof module === 'object') {
    module.exports = dreamer.Event;
}