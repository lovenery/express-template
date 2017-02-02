// modules
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// setup
var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
var env = require('./.env.json');
mongoose.Promise = global.Promise;
mongoose.connect(env.mongodb.url);

// server
var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server running on port: ' + port);

// endpoint
app.get('/', function(req, res){
    res.end('hi');
});
app.post('/', function(req, res){
    res.json(req.body);
});

var example = express.Router();
require('./app/routes/example')(example);
app.use('/example', example);