var MongoClient = require("mongodb").MongoClient;

var RestaurantQuery = function(){
  this.url = "mongodb://localhost:27017/restaurants_db";
};

RestaurantQuery.prototype = {
  allFromAPI: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection("restaurants");
      console.log(collection);
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  },

  addVisited: function(restaurantToAdd, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
      var collection = db.collection("restaurantsVisited");
      collection.insert(restaurantToAdd);
      collection.find().toArray(function(err, docs){
        console.log(docs);
        onQueryFinished(docs);
      });
    };
    });
  },

  allVisited: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
          var collection = db.collection("restaurantsVisited");
          console.log("returned from restaurantsVisited DB", collection);
          collection.find().toArray(function(err, docs){
            onQueryFinished(docs);
      });
    });
  },

  deleteVisitedRestaurants: function(){
    console.log("HIT DELETE VISITED RESTAURANTS")
    MongoClient.connect(this.url, function(err, db){
      if (err){
        console.log("error returned", err);
      }else{
          console.log("NO ERROR IN REQ")
          var collection = db.collection("restaurantsVisited");
          collection.drop("restaurantsVisited");
          db.createCollection("restaurantsVisited");
        }
      });
    }

};


module.exports = RestaurantQuery;