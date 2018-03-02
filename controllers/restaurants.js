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


//--------may not need to use the following functions:

//restaurant by id
restaurantRouter.get('/restaurants/:id', function(req, res){
  res.json(restaurants[req.params.id]);
});


module.exports = restaurantRouter;
