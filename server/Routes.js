'use strict'
var https = require('https');
module.exports = (app, chuckFacts, chuckMemes) => {


  app.get('/api/joke/random', (request, response) => {
    response.send({fact:chuckFacts.randomQuote()});
  });

  app.get('/installslack', (request, response) => {
    var client_id = "3358490050.67017692769";
    var secret = process.env.chuckSlackSecret || "notSet";
    var code = request.query.code;
    var data = JSON.stringify({});

    var options = {
      host:"slack.com",
      // port:"443",
      path:`/api/oauth.access?client_id=${client_id}&client_secret=${secret}&code=${code}`,
      // method:'GET',
      // headers: {
        // 'Content-Length': Buffer.byteLength(data)
      // }
    };

    var slackRequest = https.request(options, (res) =>{
      res.on('data', (chunk) =>{

      });
      res.on('end', () => {
        response.json({ok:true});
      });
    });

    slackRequest.on('error', (err) => {
      console.log("Error :(");
      console.log(err);
    });

    // slackRequest.write(data);
    slackRequest.end();
  });

  app.post('/slack/api/joke/random', (request, response) => {
    var token = request.body.token;
    var text =  request.body.text;
    chuckFunction(response, text, token)
  });

  app.get('/slack/api/joke/random', (request, response) => {
    var token = request.query.token;
    var text =  request.query.text;
    chuckFunction(response, text, token)
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
