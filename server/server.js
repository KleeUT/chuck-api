'use strict'
var express = require('express');
var app = express();
var ChuckFacts = require('./ChuckFacts.js');
var chuckFacts = new ChuckFacts();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send("Hello World!");
});

app.get('/api/joke/random', (request, response) => {
  response.send({fact:chuckFacts.randomQuote()});
});

var port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}) ;
