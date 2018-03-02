var Restaurants = require("../models/restaurants.js");
var Restaurant = require("../models/restaurant.js");
var MapWrapper = require("../models/mapWrapper.js");

var UI = function(map){

  this.restaurants = new Restaurants();
  var test = this.restaurants.allAPI(result)
  console.log(test)
}

UI.prototype = {

}



  module.exports = UI;