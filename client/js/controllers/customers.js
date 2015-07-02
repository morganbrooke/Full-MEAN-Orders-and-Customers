console.log('here');
co_app.controller("customersController", function (customerFactory){
  console.log('in customers controller');

  var that = this;
  that.customers = [];

  customerFactory.getCustomers(function(data){
    that.customers = data;
  })

  this.addCustomer = function (){
    console.log('clicked add');
    customerFactory.addCustomer(that.newCustomer, function(){
      customerFactory.getCustomers(function(data){
        that.customers = data;
      })
      // that.new_customer = {};
    })
  }
  this.removeCustomer = function (customer){
    console.log('remove user clicked');
    customerFactory.destroyCustomer(customer, function(){
      customerFactory.getCustomers(function(data){
        that.customers = data;
        console.log('end of CC remove')
      })
    })
  }

});
