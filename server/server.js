'use strict'
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var ChuckFacts = require('./ChuckFacts.js');
var chuckFacts = new ChuckFacts();

var SlackApiRoutes = require('./Routes/SlackApiRoutes.js');
var WebApiRoutes = require('./Routes/WebApiRoutes.js');
var InstallSlackRoute = require('./Routes/InstallSlackRoute.js');

var ChuckMemes = require('./ChuckMemes.js')
var chuckMemes = new ChuckMemes();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();
app.use(morgan('combined'));
app.use(express.static('server/public'));

InstallSlackRoute(app);
WebApiRoutes(app, chuckFacts, chuckMemes, urlencodedParser);
SlackApiRoutes(app, chuckFacts, chuckMemes, urlencodedParser);
var port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}) ;
