var Home = (function() {

	return {
		init : function() {

			var currentuser = document.getElementsByClassName('jcc-logged-ser-text')[0];
			currentuser.innerHTML = 'Hi, ' + localStorage.getItem("currentUser");
			this.onFeedButtonClicked();
		},

		onSignOutClicked : function() {

			localStorage.removeItem('currentUser');
			window.location.assign('./../login.html');
		},
		
		onFeedButtonClicked: function() {
			
			document.getElementsByClassName('jcc-feed-section')[0].style.display = "inline-block";
			document.getElementsByClassName('jcc-profile-section')[0].style.display = "none";
			
		},
		
		onProfileButtonClicked: function() {
			
			document.getElementsByClassName('jcc-feed-section')[0].style.display = "none";
			document.getElementsByClassName('jcc-profile-section')[0].style.display = "inline-block";
		}
	};

})();
Home.init();