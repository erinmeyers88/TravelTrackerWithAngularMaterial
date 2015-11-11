angular.module("travelTracker")
	.controller("countryListCtrl", function ($scope, countriesService, selectRegion) {

//Puts the continent parameter that you pass in on $scope as $scope.region
		$scope.region = selectRegion;

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