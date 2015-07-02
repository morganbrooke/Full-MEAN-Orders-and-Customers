var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return{
		show: function(req,res){
			console.log("orders.show");
			Order.find({}, function(err,results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
		},
		add: function(req,res){
			console.log(req.body, 'orders.add');
			var order = new Order({name: req.body.name.name, quantity: req.body.quantity, item: req.body.item});
			console.log(order)
			order.save(function(err){
				if(err){
					console.log('dont see me');
				}else{
					res.redirect('/');
				}
			})
		},
		destroy: function(req,res){
			// console.log(req.params, "hi");
			Order.remove({_id: req.params.id}, function(err,ok){
				if(err){
					console.log('destroy server controller error')
				}else{
					res.json(ok);
					console.log('deleted');
				}
			})
		}
	}
})();