'use strict'
var quotes = require('./facts.js');

class ChuckFacts {
  constructor() {
    // super();
    this.quotes = quotes;
  }

  randomQuote(){
    var index = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[index];
  }
}

module.exports =  ChuckFacts;
