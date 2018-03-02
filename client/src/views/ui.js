var Restaurants = require("../models/restaurants.js");
var Restaurant = require("../models/restaurant.js");
var MapWrapper = require("../models/mapWrapper.js");

var UI = function(map){ 
  // document.innerHTML = ""
  //var goButton = document.querySelector("#go-button");
  //goButton.onclick = this.handleGoButton.bind(this);

  // var africaSound = document.querySelector("#savannah")
  // africaSound.play();

  //var resetButton = document.querySelector("#reset-button");
  //resetButton.onclick = this.handleResetButton.bind(this);

  //this.restaurants = new Restaurants();

  var italianButton = document.querySelector("#italian-button");
  italianButton.onclick = this.handleItalianButton.bind(this);

  this.restaurants.allAPI(function(result){
    this.addRestaurantMarkers(result);
  }.bind(this));


  UI.prototype = {
    addHereToDB: function(){
      var restaurants = new Restaurants;
      restaurants.allVisited(function(restaurantsVisited){
        if (restaurantsVisited.length === 0){

          navigator.geolocation.getCurrentPosition(function(position) {
        // add dummy restaurant "here" to restaurantsVisited collection in db
        var here = {
          name: "here",
          coords: [position.coords.latitude, position.coords.longitude],
          telephone: "",
          opening: [ "", "" ],
          pre_theatre: {
            info: "",
            price: "",
          },
          email: "",
          Website: ""
        }

        restaurants.makePost("/restaurants", here, function(data){
        });
      });
        }
      })
    },
    addRestaurantMarkers = function(restaurantsAPI) {
      var restCoords = [];
      for (var restaurant of restaurantsAPI){
        console.log(restaurant.coords)
        /*restCoords.push({lat: restaurant.coords[0], lng: restaurant.coords[1]});
      }
        console.log(restCoords)
        map.addMarker(restCoords) */
      }
    }
  }
}

module.exports = UI;