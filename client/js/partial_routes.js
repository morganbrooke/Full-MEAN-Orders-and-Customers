co_app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/customers.html',
    controller: 'customersController',
    controllerAs: 'cc'
  })
  .when('/orders', {
    templateUrl: 'partials/orders.html',
    controller: 'ordersController',
    controllerAs: 'oc'
  })
  .otherwise({
    redirectTo: '/'
  });
});