var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name:String
});

mongoose.model('Customer', CustomerSchema);
