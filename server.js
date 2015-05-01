var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	app = express(),
	config = require('./config/db.js');

mongoose.connect(config.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//	configure CORS
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

app.use(morgan('dev'));

app.use(express.static('public'));

// catch all
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(config.port, function (req, res) {
	console.log("Running Server");
});