var bookmarks = [ 
    {name: "Facebook", url: "http://facebook.com"},
    {name: "Amazon", url: "http://amazon.com"},
    {name: "Google", url: "http://google.com"}
];

var bookmarkList = {

	$bookmarks: $('#bookmarks'),

	/**
	 * Takes a single bookmark object and creates some HTML
	 * @param {Object} bookmark
	 */
	createBookmarkHtml: function(bookmark) {
		// Your implementation
	},

	/**
	 * Renders an array of bookmark objects in #bookmarks
	 * @param {Array} bookmarks
	 */
	render: function(bookmarks) {
		// Your implementation
	},

	/**
	 * Appends a bookmark object to #bookmarks and the bookmarks array
	 * @param {Object} bookmark
	 */
	addOne: function(bookmark) {
		// Your implementation
	}
};

var bookmarkValidation = {

	passes: function(bookmark) {
		nameNotEmpty = bookmarkValidation.isNotEmpty(bookmark.name);
		urlValid = bookmarkValidation.hasValidUrl(bookmark.url);

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

		name = $('#addBookmarkName').val();
		url = $('#addBookmarkUrl').val();
		bookmark = {name: name, url: url}

		if (bookmarkValidation.passes(bookmark)) {
			$("#error").hide();
		} else {
			$("#error").show();
		}
	});
});
