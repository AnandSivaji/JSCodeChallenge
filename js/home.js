"use strict";
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
		},
		
		onPostFeedClicked: function() {
			
			var inputField = document.getElementById('feedInput');
			var input = inputField.value;
			
			var isUrl = input.isUrl();
			var feed = isUrl ? new URLFeed(input) : new TextFeed(input);
			
			feed.id = +new Date();
			feed.type = isUrl ? 'URL' : 'TYPE';
			feed.date = new Date();
			
			FeedService.createFeed(feed);
			inputField.value = '';
			document.getElementById('postButton').disabled = !inputField.value.length;
		},
		
		onFeedInutKeyUp: function() {
			
			var inputField = document.getElementById('feedInput');
			var input = inputField.value;
			document.getElementById('postButton').disabled = !input.length;
		}
	};

})();

Home.init();