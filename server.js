var express = require('express')
var app = express()
var path = require('path');

app.use(express.static(__dirname + '/client'))

var server = app.listen(8000, function(){
	console.log("full mean orders and customers on 8000");
})

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

require('./config/mongoose.js');
require('./config/routes.js')(app);