'use strict'
class ChuckFacts {
  constructor() {
    this.memes = require('fs').readdirSync("./server/public/memes");
  }

  randomMeme(){
    var index = Math.floor(Math.random() * this.memes.length);
    return this.memes[index];
  }
}

module.exports =  ChuckFacts;
