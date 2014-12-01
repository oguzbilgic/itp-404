var app = angular.module('itp', []);

app.controller('SearchController', function($scope, userApi, mediaApi) {
	$scope.users = [];
	$scope.medias = {};

	$scope.currentUser = {};

	$scope.searchUser = function(userQuery) {
		$scope.postQuery = "";
		userApi.search(userQuery).success(function(response) {
			$scope.users = response["data"];
			$scope.showUser(response["data"][0]);
		});
	};

	$scope.searchPost = function(postQuery) {
		$scope.userQuery = "";
		mediaApi.findAllByTag(postQuery).success(function(response) {
			$scope.medias = response["data"];
			console.log(response["data"]);
		});
	};

	$scope.showUser = function(user) {
		userApi.get(user.id).success(function(response) {
			if (response["meta"]["code"] == "200") {
				$scope.currentUser = response["data"];
				mediaApi.get(user.id).success(function(response) {
					$scope.currentUser.medias = response["data"];
				});
			} else {
				$scope.currentUser = {isPrivate: true};
				$scope.medias = [];
			}
		});
	};
});

app.factory('clientId', function($http) {
	return "3100357ac6954705a989b00f55e4d027";
});

app.factory('userApi', function($http, clientId) {
	return {
		get: function(userId) {
			var url = "https://api.instagram.com/v1/users/"+userId+"/?client_id="+clientId+"&callback=JSON_CALLBACK";
			return $http.jsonp(url);
		},

	    search: function(query) {
			var url = "https://api.instagram.com/v1/users/search?q="+query+"&client_id="+clientId+"&callback=JSON_CALLBACK";
			return $http.jsonp(url);
		}
	}
});

app.factory('mediaApi', function($http, clientId) {
	return {
		get: function(userId) {
			var url = "https://api.instagram.com/v1/users/"+userId+"/media/recent?client_id="+clientId+"&callback=JSON_CALLBACK";
			return $http.jsonp(url);
		},

	    findAllByTag: function(tagName) {
			var url = "https://api.instagram.com/v1/tags/"+tagName.replace(/\s+/g, '')+"/media/recent?client_id="+clientId+"&count=100&callback=JSON_CALLBACK";
			return $http.jsonp(url);
		}
	}
});

