'use strict'
var express = require('express');
var morgan = require('morgan');


var ChuckFacts = require('./ChuckFacts.js');
var chuckFacts = new ChuckFacts();
var Routes = require('./Routes.js');
var InstallSlackRoute = require('./InstallSlackRoute.js');
var ChuckMemes = require('./ChuckMemes.js')
var chuckMemes = new ChuckMemes();

var app = express();
app.use(morgan('combined'));
app.use(express.static('server/public'));

Routes(app, chuckFacts, chuckMemes);

var port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}) ;
