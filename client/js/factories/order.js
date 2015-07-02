co_app.factory('orderFactory', function($http){
  var factory = {};
  var orders = [];

  factory.getOrders = function(callback){
  	console.log('order factory get request');
  	$http.get('/orders').success(function(output){
  		callback(output);
  	})
  }
  factory.addOrder = function(info, callback){
  	console.log('adding order in factory')
  	$http.post('/addorder', info).success(function(){
  		callback();
  	})
  }
  factory.removeOrder = function(req,callback){
  	console.log('removed order factory start');
  	console.log(req._id);
  	$http.delete('/destroyorder/'+req._id).success(function(){
      callback();
      console.log('factory destroy end');
    })
  }
  return factory;
})