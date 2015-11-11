angular.module("travelTracker").service("countriesService", function ($http, $q) {


	this.getNewCountries = function (region) {
		return $http({
			method: "GET",
			url: "https://restcountries.eu/rest/v1/region/" + region
		}).then(function (responseFromCall) {
			return responseFromCall.data;
		});
	};

	
	//Visited Countries
	
	
	this.visitedCountries = [];

	this.visitedCoordinates = [];
	
	
	
	
	//Adds or deletes county from visitedCountries array when checkbox is changed.		
		
	this.updateVisitedOrNot = function (country, visited) {
		
		if (visited === true) {
			this.visitedCountries.push(country.name);
			this.visitedCoordinates.push(
				{
					country: country.name,
					lat: country.latlng[0],
					lng: country.latlng[1]
				}
				);
		}

		else {
			this.visitedCountries.splice(this.visitedCountries.indexOf(country.name), 1);
			this.visitedCoordinates.splice(this.visitedCoordinates.indexOf(country), 1);
		}
		console.log(this.visitedCountries);
	};



});