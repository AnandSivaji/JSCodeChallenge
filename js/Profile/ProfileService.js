"use strict";
var ProfileService = (function() {

	return {

		onFileUpload: function(element) {

			var fileReader = new FileReader();
			fileReader.readAsDataURL(element.files[0]);

			fileReader.onload = function(event) {
				document.getElementById("profileImage").src = event.target.result;
			};
		},

		onNameFieldChange: function() {

			this.handleError('nameErrMsg', this.validateName());
		},

		onAgeFieldChange: function() {

			this.handleError('ageErrMsg', this.validateAge());
		},

		onEmailFieldChange: function() {

			this.handleError('emailErrMsg', this.validateEmail());
		},

		onPhoneFieldChange: function() {

			this.handleError('phoneErrMsg', this.validatePhoneNumber());
		},

		handleError: function(errorField, fieldValue) {
			
			var errField = document.getElementById(errorField);
			errField.style.display = fieldValue.isValid ? 'none' : 'inline';
			errField.innerHTML = fieldValue.msg;
			
			document.getElementById('savebutton').disabled = !(this.validateName().isValid && 
															   this.validateAge().isValid &&
															   this.validateEmail().isValid && 
															   this.validatePhoneNumber().isValid);
		},

		validateName: function() {

			var value = document.forms['profile']['name'].value;
			
			return {

				isValid : value.length != 0 && value.length < 100 && ( typeof value == 'string'),
				msg : value.length == 0 ? 'Name is required' : value.length > 100 ? 
										  'Name exceeds maximum of 100 characters' : (typeof value != 'string') ? 
										  'Name is not valid' : ''
			};
		},

		validateAge: function() {

			var value = document.forms['profile']['age'].value;
			var age = parseInt(value);
			
			return {
				
				isValid: value.length != 0 && age > 0 && age < 120 && (typeof age == 'number') && !isNaN(age),
				msg: value.length == 0 ? 'Age is required' : 
					 (age <= 0 || age > 120 || typeof age != 'number' || isNaN(age)) ? 'Age is not valid' : ''
					 
			};
		},

		validateEmail: function() {

			var value = document.forms['profile']['email'].value;

			var atpos = value.indexOf("@");
			var dotpos = value.lastIndexOf(".");
			
			return {
			
				isValid: value.length != 0 && atpos > 1 && dotpos > (atpos + 2) && (dotpos + 2) <= value.length,
				msg: value.length == 0 ? 'Email is required' : 
					 atpos < 1 || dotpos < (atpos + 2) || (dotpos + 2) >= value.length ? 'Email is not valid' : ''
			
			};
		},

		validatePhoneNumber: function() {

			var value = document.forms['profile']['phone'].value;
			var phoneNumber = parseInt(value);
			
			return {
				
				isValid: value.length != 0 && value.length == 10 && ( typeof phoneNumber == 'number') && !isNaN(phoneNumber),
				msg: value.length == 0 ? 'Phone number is required' : value.length != 10 || 
					 ( typeof phoneNumber != 'number') || isNaN(phoneNumber) ?
										 'Phone Number is invalid' : ''
			};
		},
		
		saveProfile: function() {
			
			var newProfile = new Profile();
			var form = document.forms['profile'];
			
			newProfile.name = form['name'].value;
			newProfile.age = parseInt(form['age'].value);
			newProfile.phone = parseInt(form['phone'].value);
			newProfile.email = form['email'].value;
			newProfile.address = form['address'].value;
			newProfile.pic = form['profile'].value;
			
			this.clearFields();
			
			alert("Profile created successfully");
		},
		
		clearFields: function() {
			
			var form = document.forms['profile'];
			
			form['name'].value = '';
			form['age'].value = '';
			form['phone'].value = '';
			form['email'].value = '';
			form['address'].value = '';
			form['profile'].value = '';
			document.getElementById("profileImage").src = '';
		}
	};
})();
