'use strict'
var express = require('express');
var app = express();
var ChuckFacts = require('./ChuckFacts.js');
var chuckFacts = new ChuckFacts();
var Routes = require('./Routes.js');

app.use(express.static('server/public'));

Routes(app, chuckFacts);

var port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}) ;
