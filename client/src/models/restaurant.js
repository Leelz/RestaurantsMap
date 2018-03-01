var Restaurant = function(options){
  this.name = options.name;
  this.coords = options.coords;
  this.opening = options.opening;
  this.telephone = options.telephone;
  this.pre_theatre = options.pre_theatre;
  this.email = options.email;
  this.website = options.website;
}

Restaurant.prototype = {
 
}

  //use on button press do this function, if this happens restart


module.exports = Restaurant;