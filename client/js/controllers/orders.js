co_app.controller('ordersController', function (orderFactory){
  console.log('in orders controller');
  var that = this;
  that.orders = [];

  orderFactory.getOrders(function(data){
    that.orders = data;
  })

    this.addOrder = function (){
      console.log('clicked add')
      orderFactory.addOrder(that.newOrder, function(){
        orderFactory.getOrders(function(data){
          that.orders = data;
        })
      })
    }
    this.removeOrder = function (order){
      console.log('cicked remove');
      orderFactory.removeOrder(order, function (data){
        orderFactory.getOrders(function (data){
          that.orders=data;
        })
        console.log("oc removed done");
      })
    }
})