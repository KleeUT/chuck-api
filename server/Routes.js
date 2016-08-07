'use strict'
module.exports = (app, chuckFacts) => {
  app.get('/api/joke/random', (request, response) => {
    response.send({fact:chuckFacts.randomQuote()});
  });

  app.get('/slack/api/joke/random', (request, response) => {
    var token = request.query.token;
    console.log(`${request.query.text}`);
    switch(request.query.text){
      case "meme" :  memeResponse(response, token); break;
      default : randomJoke(response, token);   break;
    }
  });

  var memeResponse = (response, token) =>{
    response.send({
      "token":token,
      "text":"Is there an image?",
      "image_url":"https://chuck-api.herokuapp.com/memes/swim.jpg"
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
