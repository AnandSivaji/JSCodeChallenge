"use strict";
var Feed = function(id, type, date, avatarSrc) {
	
	this._id = feedType; 
	this._type = feedDate;
	this._date = date;
	this._avatarSrc = avatarSrc;
};

Feed.prototype = {
	
	getId: function() { return this._id; },
	setId: function(id) { this._id = id; },
	
	getType: function() { return this._type; },
	setType: function(type) { this._type = type; },
	
	getDate: function() { return this._date; },
	setDate: function(date) { this._date = date; },
	
	getAvatarSrc: function() { return this._avatarSrc; },
	setAvatarSrc: function(src) { this._avatarSrc = src; }
};
