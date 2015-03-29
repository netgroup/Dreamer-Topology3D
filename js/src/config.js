if (typeof dreamer === 'undefined') {
  var dreamer = {};
}

dreamer.Config = (function (global) {
    'use strict';

    function Config (edge_label, layer) {
    	
		//Dreamer-Topology-and-Service-Validator
		this.top_ser_validator = {};
		this.top_ser_validator.host_port = 8080;
		this.top_ser_validator.host_name = "127.0.0.1";

		//Experiment Handler
		this.experiment_handler = {};
		this.experiment_handler.host_port = 3000;
		this.experiment_handler.host_name = "127.0.0.1";
    }


    return Config;
}());

if (typeof module === 'object') {
    module.exports = dreamer.Config;
}