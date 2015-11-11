angular.module("travelTracker")
	.directive("menuBar", function () {

		return {
			templateUrl: "directives/menuBar/menuBarTemp.html",

			controller: function ($scope, $state, $location) {
				

				$scope.regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
				
				$scope.onChange = function (region) {
					$location.path("/regions/" + region);
				};
				
			}
		};
	});