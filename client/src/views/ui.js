var Restaurants = require("../models/restaurants.js");
var Restaurant = require("../models/restaurant.js");
var MapWrapper = require("../models/mapWrapper.js");

var UI = function(map){ 
  // document.innerHTML = ""
  var goButton = document.querySelector("#go-button");
  goButton.onclick = this.handleGoButton.bind(this);

  // var africaSound = document.querySelector("#savannah")
  // africaSound.play();

  var resetButton = document.querySelector("#reset-button");
  resetButton.onclick = this.handleResetButton.bind(this);

  this.restaurants = new Restaurants();

  this.restaurants.allAPI(function(result){
    this.renderRestaurantsList(result);
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

    renderRestaurantsList: function(restaurantsAPI){
      var restaurantsSelect = document.querySelector("#selector");
      restaurantsSelect.innerHTML = ""

      var unselectable = document.createElement("option");
      unselectable.innerText = "Country:"
      unselectable.disabled = true;
      unselectable.selected = true;
      restaurantsSelect.appendChild(unselectable);

      for (var restaurant of restaurantsAPI){
        var restaurantChoice = document.createElement("option");
        restaurantChoice.innerText = restaurant.name;
        restaurantChoice.value = JSON.stringify(restaurant);
        restaurantsSelect.appendChild(restaurantChoice);
      }
    }
  }
}

module.exports = UI;