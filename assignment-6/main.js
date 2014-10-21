var Page = {
	render: function(page) {
		var html = Page.template(page);
		$("#resp").html(html);
	},

	template: function(page) {
		var source = $("#page-template").html();
		var template = Handlebars.compile(source);
		return template(page);
	}
}

jQuery(function(){
	$('#searchForm').submit(function(event) {
		event.preventDefault();

		var username = $('#username').val();

		$.ajax({
			  url: "fb_page.php?page="+username,
			  dataType: 'json',
			  success: function(data) {
				  Page.render(data);
			  }
		});
	});
});
