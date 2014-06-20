if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.View = (function (global) {
    'use strict';

    function View (editor) {
        
      
        this.tunmecmodified = new dreamer.Event(this);

        var self = this;
        //
        $('#tun_option').click(function () {
           // $('#tun_type').html($('#tun_option').val());
            self.tunmecmodified.notify({'tunmec': $('#tun_option').val()});
        });

    }


    return View;
}());

if (typeof module === 'object') {
    module.exports = dreamer.View;
}