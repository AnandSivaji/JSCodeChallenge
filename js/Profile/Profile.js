"use strict";
function Profile(name, age, phone, email, address, pic) {

	this.name = name;
	this.age = age;
	this.phone = phone;
	this.email = email;
	this.address = address;
	this.pic = pic;
};

Profile.prototype = {
	
	getName: function() { return this.name; },
	getAge: function() { return this.age; },
	getPhone: function() { return this.phone; },
	getEmail: function() { return this.email; },
	getaddress: function() { return this.address; }
};
