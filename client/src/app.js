var UI = require("./views/ui");
var Restaurants = require("./models/restaurants.js");
var MapWrapper = require("./models/mapWrapper.js");

var restaurant = null;

var app = function() {


  //creates the map
  mapDiv = document.querySelector("#mapDiv");
  var centre = {lat: 56, lng: -3 };
  this.map = new MapWrapper(centre, 3);
  this.map.geoLocate();

  var ui = new UI(this.map);  
}

window.onload = app;