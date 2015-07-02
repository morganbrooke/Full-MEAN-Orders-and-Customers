var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');

module.exports = function(app){
	app.get('/customers', function(req,res){
		customers.show(req,res)
	})
	app.post('/add', function(req,res){
		console.log('routttttteeeeessssss');
		customers.add(req,res)
	})
	app.delete('/destroy/:id', function(req,res){
		console.log('routing');
		customers.destroy(req,res)
	})
	app.get('/orders', function(req,res){
		console.log('fucking here');
		orders.show(req,res)
		console.log('orders routing');
	})
	app.post('/addorder', function(req,res){
		console.log('step 1 adding ')
		orders.add(req,res)
	})
	app.delete('/destroyorder/:id', function(req,res){
		console.log('delete order routing')
		orders.destroy(req,res)
	})
};