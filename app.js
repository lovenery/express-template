// modules
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();

// setup
var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST);

// server
var server = http.createServer(app);
var port = process.env.PORT;
server.listen(port);
console.log('Server running on port: ' + port);

// endpoint
var routes = require('./app/routes.js');
routes(app);