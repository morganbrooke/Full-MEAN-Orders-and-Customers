co_app.factory('customerFactory', function($http){
  var customers = [];
  var factory = {};

  factory.getCustomers = function(callback){
  	console.log("customer factory get customer");
  	$http.get('/customers').success(function(output){
    	callback(output);
      // console.log(output);
    });
  }
  factory.addCustomer = function(info, callback) {
    $http.post('/add', info).success(function(){
      callback();
    })
    // friends.push({name: info.name, age: info.age});
    // callback(friends);
  }
  factory.destroyCustomer = function(req,callback){
    console.log('factory destroy')
    console.log(req._id);
    $http.delete('/destroy/'+req._id).success(function(){
      callback();
      console.log('factory destroy end');
    })
  }
  return factory;
})