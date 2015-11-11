angular.module("travelTracker")
	.controller("africaCtrl", function ($scope, countriesService) {

		$scope.getCountries = function () {

			countriesService.getAfrica().then(function (result) {
				$scope.region = result;
			});
		} ();

		$scope.updateVisitedOrNot = function (country, visitedOrNot) {
			countriesService.updateVisitedOrNot(country, visitedOrNot);
		};

		$scope.visitedCountries = countriesService.visitedCountries;

		$scope.checkCountry = function (country) {
			if ($scope.visitedCountries.indexOf(country.name) !== -1) {
				return true;
			}
		};



		$scope.collapse = function (country) {
			
			if (country === $scope.selectedCountry) {
				$scope.selectedCountry = '';
			}
			
			else {
				$scope.selectedCountry = country;
			}
	
		};



		


	});