"use strict";
function Feed(id, type, date, avatarSrc) {
	this.id = id;
	this.type = type;
	this.date = date;
	this.avatarSrc = avatarSrc;
};

Feed.prototype = {
	
	getId: function() { return this.id; },
	setId: function(id) { this.id = id; },
	
	getType: function() { return this.type; },
	setType: function(type) { this.type = type; },
	
	getDate: function() { return this.date; },
	setDate: function(date) { this.date = date; },
	
	getAvatarSrc: function() { return this.avatarSrc; },
	setAvatarSrc: function(src) { this.avatarSrc = src; }
};

function URLFeed(url) {
	this.url = url;
}

function TextFeed(text) {
	this.text = text;
}

URLFeed.prototype = new Feed();
URLFeed.prototype.getFeed = function() { return this.url; };

TextFeed.prototype = new Feed();
TextFeed.prototype.getFeed = function() { return this.text; };


