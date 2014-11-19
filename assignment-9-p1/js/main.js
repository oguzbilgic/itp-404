var app = angular.module('itp', []);

app.controller('GradebookController', function($scope, gradeStats, gradesApi) {
	$scope.studentGrades = [];

	gradesApi.all().then(function(response) {
		console.log(response)
		$scope.studentGrades = response.data.grades;
	});

	$scope.$watch('studentGrades', function() {
		$scope.gradeAverage = gradeStats.getAverage($scope.studentGrades);
		$scope.gradeHighest = gradeStats.getHighest($scope.studentGrades);
		$scope.gradeLowest = gradeStats.getLowest($scope.studentGrades);
	}, true);

	$scope.addScore = function() {
		console.log($scope.gradeForm);
		$scope.studentGrades.push($scope.gradeForm);
		// $scope.gradeAverage = gradeStats.getAverage($scope.studentGrades);
		$scope.gradeForm = {};
	};
});

app.factory('gradesApi', function($http) {
	return {
		all: function() {
			return $http.get('grades.json');
		}
	}
});

app.factory('gradeStats', function() {
	function getAverage(studentGrades) {
		var sum = 0;

		studentGrades.forEach(function(studentGrade) {
			sum += studentGrade.grade;
		});

		return sum / studentGrades.length;
	}

	function getHighest(studentGrades){
		var highest = 0;
		studentGrades.forEach(function(studentGrade) {
			if (studentGrade.grade > highest) {
				highest = studentGrade.grade;
			}
		});
		return highest;
	}

	function getLowest(studentGrades){
		var lowest = 9999;
		studentGrades.forEach(function(studentGrade) {
			if (studentGrade.grade < lowest) {
				lowest = studentGrade.grade;
			}
		});
		return lowest;
	}

	return {
		getAverage: getAverage,
		getHighest: getHighest,
		getLowest: getLowest
	}
});
