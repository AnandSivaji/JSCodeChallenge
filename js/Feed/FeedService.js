"use strict";
var FeedService = (function() {

	var feeds = []; 

	return {

		createFeed: function(feed) {
			
			var list = document.getElementsByTagName('ul')[0];
			var fragment = document.createDocumentFragment();

			feeds.push(feed);

			fragment.appendChild(this.getFeedTemplate(feed));
			list.appendChild(fragment);
		},

		deleteFeed: function(feedId) {
			
			for (var i = 0, j = feeds.length; i < j; i++) {
				
				if (feeds[i].getId() === feedId) {
					
					feeds.splice(i, 1);
					this.getList().removeChild(this.getList().childNodes[i]); 
					return;
				}
			}
		},
		
		createFeedNodes: function() {
			
			var fragment = document.createDocumentFragment();
			
			for (var i = 0, j = feeds.length; i < j; i++) {
				fragment.appendChild(this.getFeedTemplate(feeds[i]));
			} 
			
			this.getList().appendChild(fragment);
		},
		
		getFeedTemplate: function(feed) {

			var item = document.createElement('li');
			item.setAttribute('class', 'jcc-feed-item');
				
			var avatar = document.createElement('div');
			avatar.setAttribute('class', 'jcc-feed-item-avatar');
			avatar.innerHTML = '&nbsp';
			
			var content = document.createElement('div');
			content.setAttribute('class', 'jcc-feed-item-content');
			
			var deleteButtonContainer = document.createElement('div');
			deleteButtonContainer.setAttribute('class', 'jcc-feed-delete');
			
			var deleteButton = document.createElement('button');
			deleteButton.setAttribute('onclick', 'FeedService.deleteFeed('+ feed.getId() +')');
			deleteButtonContainer.appendChild(deleteButton);
			
			var isURL = feed instanceof URLFeed;
			var tag = isURL ? 'a' : 'div';
			
			var feedContent = document.createElement(tag);
			feedContent.setAttribute('class', 'jcc-feed-text');
			
			if (isURL) { 
				feedContent.setAttribute('href', feed.getFeed());
				feedContent.setAttribute('target', '_blank');
			}
			
			feedContent.innerHTML = feed.getFeed();
			
			var feedDate = document.createElement('div');
			feedDate.setAttribute('class', 'jcc-feed-date');
			feedDate.innerHTML = feed.getDate();
			
			content.appendChild(deleteButtonContainer);
			content.appendChild(feedContent);
			content.appendChild(feedDate);
			
			item.appendChild(avatar);
			item.appendChild(content);
			
			return item;
		},
		
		getList: function() {
			return document.getElementsByTagName('ul')[0];
		}
	};

})();
