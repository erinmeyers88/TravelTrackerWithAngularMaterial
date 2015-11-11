angular.module("travelTracker")
	.controller("homeCtrl", function ($scope) {
		
		$scope.test = "test";
		console.log('regions', $scope.regions);
	}); 