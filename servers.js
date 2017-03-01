var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello');

});

app.get('/about', function(req, res){
	res.send('About us');
})

app.listen(3000);