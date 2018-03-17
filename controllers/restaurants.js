var express = require('express');
var app = express();
var restaurantRouter = express.Router();

var Restaurant = require('../client/src/models/restaurant');
var restaurants = require("../client/src/models/restaurants");
var RestaurantQuery = require("../client/db/restaurantQuery.js");
var query = new RestaurantQuery();


// API index
restaurantRouter.get('/restaurants/api', function(req, res) {
  query.allFromAPI(function(results){
    res.json(results);
  })
});

// index
restaurantRouter.get('/restaurants', function(req, res) {
  query.allVisited(function(results){
    res.json(results);
  })
});

//add new visited restaurant to notebook
restaurantRouter.post('/restaurants', function(req, res) {
  var restaurant = new Restaurant({
    name: req.body.name,
    coords: req.body.coords,
  });
  query.addVisited(restaurant, function(results){
    // res.json(results);
    res.redirect("/");
  })
});


//delete visited restaurants to reset the app
restaurantRouter.delete('/restaurants', function(req, res) {
  query.deleteVisitedRestaurants();
  res.json({data: restaurants});
});


//--------may not need to use the following functions:

//restaurant by id
restaurantRouter.get('/restaurants/:id', function(req, res){
  res.json(restaurants[req.params.id]);
});


//restaurant update
restaurantRouter.put('/restaurants/:id', function(req, res) {
  var restaurant = new Restaurant({
    name: req.body.name,
    capital: req.body.capital
  });
  restaurants[req.params.id] = restaurant;
  res.json({data: restaurants});
});

//delete specific restaurant
restaurantRouter.delete('/restaurants/:id', function(req, res) {
  restaurants.splice(req.params.id, 1);
  res.json({data: restaurants});
});


module.exports = restaurantRouter;
