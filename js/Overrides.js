"use strict";
String.prototype.contains = function(input) {
	return this.indexOf(input) > -1;
};

String.prototype.isUrl = function() {
	
	var regexp = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?");
	return regexp.test(this);
};

Date.prototype.format = function() {
	
	return (this.getMonth() + 1) + "/" + this.getDate() + "/" + this.getFullYear() + "\t" + this.timeNow();
};

Date.prototype.timeNow = function () {
     return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + 
     		 ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + 
     		 ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
};
