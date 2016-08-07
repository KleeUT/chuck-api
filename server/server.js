'use strict'
var express = require('express');
var app = express();
var ChuckFacts = require('./ChuckFacts.js');
var chuckFacts = new ChuckFacts();
var Routes = require('./Routes.js');
var ChuckMemes = require('./ChuckMemes.js')
var chuckMemes = new ChuckMemes();

app.use(express.static('server/public'));

Routes(app, chuckFacts, chuckMemes);

var port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}) ;
