var movieList = {

	$movies: $('#movies'),

	render: function(movies) {
		$("#movies").empty();
		movieList.setLoading(false);
		movies.forEach(function(movie) {
			var html = movieList.template(movie);
			$("#movies").append(html);
		});
	},

	template: function(movie) {
		var source = $("#movie-template").html();
		var template = Handlebars.compile(source);
		console.log(movie);
		return template(movie);
	},

	setLoading: function(loading) {
		if (loading) {
			$('#loading').show();
		} else {
			$('#loading').hide();
		}
	}
};

var rottenTomatoes = {
	api_key: "z2b7ms36w4ybzz5t87cs2sru",

	search: function(query) {
		var script = document.createElement('script');
		script.src = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q="+query+"&page_limit=40&page=1&apikey="+rottenTomatoes
			.api_key+"&callback=rottenTomatoes.renderMovies";
		document.getElementsByTagName('head')[0].appendChild(script);
		movieList.setLoading(true);
	},

	renderMovies: function(response) {
		movieList.render(response.movies);
	}
}

jQuery(function(){
	$('#searchForm').submit(function(event) {
		event.preventDefault();

		var movie = $('#movieName').val();
		rottenTomatoes.search(movie);
	});
});
