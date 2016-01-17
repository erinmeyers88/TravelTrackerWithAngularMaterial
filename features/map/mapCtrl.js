angular.module("travelTracker")
  .controller("mapCtrl", function ($scope, countriesService) {
   
   $scope.visitedCoordinates = countriesService.visitedCoordinates;
   
    var mapOptions = {
      zoom: 2,
      center: new google.maps.LatLng(-10, 10),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (lat, lng, title) {

      var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(lat, lng),
        title: title
      });
      marker.content = '<div class="infoWindowContent">' + title + '</div>';

      google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
        infoWindow.open($scope.map, marker);
      });

      $scope.markers.push(marker);

    }

    for (i = 0; i < $scope.visitedCoordinates.length; i++) {
      createMarker($scope.visitedCoordinates[i].lat, $scope.visitedCoordinates[i].lng, $scope.visitedCoordinates[i].country);
    }

    $scope.openInfoWindow = function (e, selectedMarker) {
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
    };




  });






