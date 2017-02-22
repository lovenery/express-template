// modules
var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
const morgan = require('morgan')
// var client = require('redis').createClient();
// var limiter = require('express-limiter')(app, client);

// setup
// limiter(require('./config/limiter'));
app.use(morgan('dev'))
app.use(require('./config/cors'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST);

// server
var server = http.createServer(app);
server.listen(process.env.PORT);
console.log('Server running on port: ' + process.env.PORT);

// endpoint
var routes = require('./app/routes.js');
routes(app);