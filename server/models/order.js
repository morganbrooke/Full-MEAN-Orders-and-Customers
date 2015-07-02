var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	name:String,
	quantity:Number,
	item:String
});

mongoose.model('Order', OrderSchema);