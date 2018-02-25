var MapWrapper = function(coords, zoom) {
  var container = document.querySelector("#mapDiv");
    this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
    });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.DROP
    });
    console.log("marker added");
    return marker;
  },

  addInfoWindow: function(map, marker, contentString){
    var infoWindow = new google.maps.InfoWindow({
          content: contentString,
        });
      marker.addListener("click", function(){
      infoWindow.open(this.googleMap, marker);
    })
  },

  geoLocate: function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      var centre = {lat: position.coords.latitude, lng: position.coords.longitude}; 
      this.googleMap.setCenter(centre); 
      var marker = this.addMarker(centre);

      var infoWindow = new google.maps.InfoWindow({
            content: "<h2>Home</h2>",
          });


      // var infoWindow = this.addInfoWindow(this.googleMap, marker, "<h2>Home</h2>");
      infoWindow.open(this.googleMap, marker);
    }.bind(this));
  }
}

module.exports = MapWrapper;

