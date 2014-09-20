if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.OshiController = (function () {

	function OshiController(){

	}

	OshiController.prototype.loadSpec = function(){
		var fileName = 'oshi-spec.json';
		
		var response = JSON.parse(preParseData);
		return response;

	};


    return OshiController;

}(this));

if (typeof module === 'object') {
    module.exports = dreamer.OshiController;
}