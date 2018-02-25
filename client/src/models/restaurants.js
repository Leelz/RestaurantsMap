var Restaurant = require("./restaurant");

var Restaurants = function(){

}

Restaurants.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.onload = callback;
    request.send();
  },

  makePost: function(url, newData, callback){
    var data = JSON.stringify(newData);
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = callback;
    request.send(data);
  },

  makeDeleteRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("DELETE", url);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = callback;
    request.send();
  },

  allVisited: function(callback){
  var self = this;
    this.makeRequest("http://localhost:3000/restaurants", function() {
      if (this.status !== 200)
        return;      
      var jsonString = this.responseText;
      var result = JSON.parse(jsonString);
      callback(result);
    });
  }, 

  allAPI: function(callback){
    var self = this;
    this.makeRequest("http://localhost:3000/restaurants/api", function(){
      if(this.status !== 200) 
        return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      var restaurantsAPI = self.populateDropDownList(results);
      callback(restaurantsAPI);
    })
  },


  populateDropDownList: function(results){
    var Restaurants = [];
    for (var result of results){
      var restaurant = new Restaurant (result);
    Restaurants.push(restaurant);
    }
    return Restaurants;
  }

}

module.exports = Restaurants;