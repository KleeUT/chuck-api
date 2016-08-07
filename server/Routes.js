'use strict'
module.exports = (app, chuckFacts, chuckMemes) => {


  app.get('/api/joke/random', (request, response) => {
    response.send({fact:chuckFacts.randomQuote()});
  });

  app.get('/slack/api/joke/random', (request, response) => {
    var token = request.query.token;
    switch(request.query.text){
      case "meme" :  randomMeme(response, token); break;
      default : randomJoke(response, token);   break;
    }
  });

  var randomMeme = (response, token) =>{
    response.send({
      "token":token,
      "text":"Chuck meme! Haha! Funny!",
      "attachments":[{
        "fallback": "a meme of Chuck Norris, it's funny",
        "image_url":`https://chuck-api.herokuapp.com/memes/${chuckMemes.randomMeme()}`
      }]
    });
  }

  var randomJoke = (response, token) => {
    var fact = chuckFacts.randomQuote();
    response.send(
      {
        "token": token,
        "text": `Chuck fact #${fact.id}: ${fact.fact}`
      });
  }
}
