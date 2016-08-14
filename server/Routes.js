'use strict'
var https = require('https');
module.exports = (app, chuckFacts, chuckMemes) => {
  app.get('/api/joke/random', (request, response) => {
    response.send({fact:chuckFacts.randomQuote()});
  });


  app.post('/slack/api/joke/random', (request, response) => {
    if(request.body){
      var token = request.body.token;
      var text =  request.body.text;
      chuckFunction(response, text, token)
    }else{
      chuckFunction(response)
    }
  });

  app.get('/slack/api/joke/random', (request, response) => {
    if(request.query){
      var token = request.query.token;
      var text =  request.query.text;
      chuckFunction(response, text, token)
    }else{
      chuckFunction(response)
    }

  });

  var chuckFunction = (response, text, token) => {
    switch(text){
      case "help" :  response.send(helpMessage(token)); break;
      case "meme" :  response.send(randomMeme(token)); break;
      default : response.send(randomJoke(token));   break;
    }
  };

  var helpMessage = (token) =>{
    return {
      "token":token,
      "text":
        "/chuck [help|meme] \n" +
        "help: display this \n" +
        "meme: display Chuck Norris meme \n" +
        "blank or anything else: get a Chuck Norris fact"
    }
  }

  var randomMeme = (token) =>{
    return {
      "token":token,
      "text":"Chuck meme! Haha! Funny!",
      "attachments":[{
        "fallback": "a meme of Chuck Norris, it's funny",
        "image_url":`https://chuck-api.herokuapp.com/memes/${chuckMemes.randomMeme()}`
      }]
    };
  }

  var randomJoke = (token) => {
    var fact = chuckFacts.randomQuote();
      return {
        "token": token,
        "text": `Chuck fact #${fact.id}: ${fact.fact}`
      };
  }
}
