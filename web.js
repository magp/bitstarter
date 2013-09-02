var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var message = new Buffer(fs.readFileSync('index.html','utf8'));
var supporters = new Buffer(fs.readFileSync('supporters.html','utf8'));

console.log(message.length);
console.log(message.toString('utf8'));

app.get('/', function(request, response) {
  response.send(message.toString('utf8'));
});
app.get('/supporters', function(request, response) {
  response.send(supporters.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
