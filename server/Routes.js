'use strict'
var http = require('http');
module.exports = (app, chuckFacts, chuckMemes) => {


  app.get('/api/joke/random', (request, response) => {
    response.send({fact:chuckFacts.randomQuote()});
  });

  app.get('/installslack', (request, response) => {
    var client_id = "3358490050.67017692769";
    var secret = process.env.chuckSlackSecret || "notSet";
    var code = request.query.code;
    console.log(`Request code ${code}`)
    http.request({
      host:" https://slack.com/api/oauth.access",
      port:80,
      client_id:client_id,
      client_secret:secret,
      code: code || code1
    }, (res) => {
        console.log(response);
    });

  });

  app.get('/slack/api/joke/random', (request, response) => {
    var token = request.query.token;
    switch(request.query.text){
      case "help" :  response.send(helpMessage(token)); break;
      case "meme" :  response.send(randomMeme(token)); break;
      default : response.send(randomJoke(token));   break;
    }
  });

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
