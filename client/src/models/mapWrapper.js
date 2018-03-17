var MapWrapper = function(coords, zoom) {
  var container = document.querySelector("#mapDiv");
    this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
    });

}

MapWrapper.prototype = {
  addMarker: function(coords, restaurant){
    console.log()
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
    });
    google.maps.event.addDomListener(marker, 'click', function() {
      var infobox = document.querySelector("#restaurant_info");
      infobox.innerHTML = "";
      infobox.innerHTML = restaurant.name;
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

  addMarkerListener: function(){
   google.maps.event.addListener(marker, 'click', function () {
   this.setTitle('I am clicked');
    });
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

