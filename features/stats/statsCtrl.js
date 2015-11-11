angular.module("travelTracker")
	.controller("statsCtrl", function ($scope, countriesService) {
		
		$scope.visitedCountries = countriesService.visitedCountries;
		
		$scope.numberOfCountriesVisited = $scope.visitedCountries.length;
		
	});