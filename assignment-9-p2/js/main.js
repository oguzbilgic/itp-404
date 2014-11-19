var app = angular.module('movies', []);

app.controller('MoviesController', function($scope, $http) {
	$scope.movies = [];

	$scope.search = function() {
		console.log($scope.searchForm);
		var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q="+$scope.searchForm.query+"&page_limit=40&page=1&apikey=z2b7ms36w4ybzz5t87cs2sru&callback=JSON_CALLBACK";
		$http.jsonp(url).success(function(data) {
			$scope.movies= data.movies;
			console.log(data);
		});
		$scope.searchForm = {};
	};
});
