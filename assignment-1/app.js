var bookmarkList = {

	$bookmarks: $('#bookmarks'),

	/**
	 * Takes a single bookmark object and creates some HTML
	 * @param {Object} bookmark
	 */
	createBookmarkHtml: function(bookmark) {
		var a = '<a href="'+bookmark.url+'">'+ bookmark.name +'</a>'
		var li = '<li>'+ a +'</li>'
		return li
	},

	/**
	 * Renders an array of bookmark objects in #bookmarks
	 * @param {Array} bookmarks
	 */
	render: function(bookmarks) {
		bookmarks.forEach(function(bookmark) {
			bookmarkList.addOne(bookmark);
		});
	},

	/**
	 * Appends a bookmark object to #bookmarks and the bookmarks array
	 * @param {Object} bookmark
	 */
	addOne: function(bookmark) {
		var html = bookmarkList.createBookmarkHtml(bookmark);
		$('#bookmarks').append(html);
	}
};

var bookmarkValidation = {

	passes: function(bookmark) {
		var nameNotEmpty = bookmarkValidation.isNotEmpty(bookmark.name);
		var urlValid = bookmarkValidation.hasValidUrl(bookmark.url);

		return (nameNotEmpty && urlValid);
	},

	/**
	 * @param {String} string
	 * @return {Boolean} 
	 */
	isNotEmpty: function(string) {
		return (string);
	},

	/**
	 * @param {String} url
	 * @return {Boolean} True if url is valid, false otherwise
	 */
	hasValidUrl: function(url) {
		var regex = /^https?:\/\/.+$/;
		return regex.test(url);
	}
};

jQuery(function(){
	$('#addBookmarkForm').submit(function(event) {
		event.preventDefault();

		var name = $('#addBookmarkName').val();
		var url = $('#addBookmarkUrl').val();
		var bookmark = {name: name, url: url}

		if (bookmarkValidation.passes(bookmark)) {
			$("#error").hide();
			bookmarkList.addOne(bookmark);
		} else {
			$("#error").show();
		}
	});

	var bookmarks = [ 
		{name: "Facebook", url: "http://facebook.com"},
		{name: "Amazon", url: "http://amazon.com"},
		{name: "Edlio", url: "http://edlio.com"}
	];

	bookmarkList.render(bookmarks);
});
