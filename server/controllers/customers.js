var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return{
		show: function(req,res){
			Customer.find({}, function (err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
		},
		add: function(req,res){
			console.log(req.body, "here");
			var customer = new Customer({name: req.body.name});
			customer.save(function(err){
				if(err){
					console.log("please don't see me");
				}else{
					res.redirect('/');
				}
			})
		},
		destroy: function(req,res){
			console.log(req.params, "hi");
			Customer.remove({_id: req.params.id}, function(err,ok){
				if(err){
					console.log(err);
				}else{
					res.json(ok);
					console.log('deleted');
				}
			})
		}
	}
})();