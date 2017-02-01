// modules
var express = require('express');
var http = require('http');

// server
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server running on port: ' + port);

// endpoint
app.get('/', function(req, res){
    res.end('hi');
});