var Login = (function() {
	
	var username = 'anand';
	var password = 'sivaji27';
	
	return {
		
		onSignInClicked: function() {
			
			var loginForm = document.forms['login'];
			var user = this.validateUsername(loginForm.username.value);
			var pass = this.validatePassword(loginForm.password.value);
						
			if (user.valid && pass.valid) {
				
				loginForm.style.display = 'none';
				window.location.assign('./partials/home.html');
				
				if (typeof(Storage)) {
					localStorage.setItem('currentUser', username);
    			}
    			return;
			} 
			
			if (!user.valid) {
				var userError = document.getElementById('userErrorMsg');
				userError.innerHTML = user.msg;
				userError.hidden = !user.valid;
			}
			
			if (!pass.valid) {
				var passError = document.getElementById('passErrorMsg');
				passError.innerHTML = pass.msg;
				passError.hidden = !pass.valid;
			}
		},
		
		validateUsername: function(user) {
			
			return {
				valid: user.length && user === username && user.length < 8,
				msg: (user.length == 0) ? 'Username is required' : (user.length > 8) ?
										  'Username exceeds maximum length' : (user !== username) ? 
										  'Invalid Username' : ''
			};
		},
		
		validatePassword: function(pass) {
			
			return {
				valid: pass.length && pass === password && pass.length > 6,
				msg: (pass.length == 0) ? 'Password is required' : (pass.length < 6) ? 
										  'Password should be minimum 6 characters' : (pass !== password) ? 'Invalid Password' : ''
			};
		},
		
		clearInvalid: function() {
			
			var userError = document.getElementById('userErrorMsg');
			var passError = document.getElementById('passErrorMsg');
			
			userError.innerHTML = '';
			userError.hidden = true;
				
			passError.innerHTML = '';
			passError.hidden = true;
		}
	};
})();
