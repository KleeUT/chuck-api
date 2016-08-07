'use strict'
module.exports = (app, chuckFacts) => {
  app.get('/api/joke/random', (request, response) => {
    response.send({fact:chuckFacts.randomQuote()});
  });

  app.get('/slack/api/joke/random', (request, response) => {
    var fact = chuckFacts.randomQuote();
    response.send(
      {
        "token": request.query.token,
        "text": `Chuck fact #${fact.id}: ${fact.fact}`
      }
    );
  });

  app.post('/slack/api/joke/random', (request, response) =>{
    var fact = chuckFacts.randomQuote();
    console.log(`${request.body.command} ${request.body.text}`)
    response.send(
      {
        "token": request.body.token,
        "text": `Chuck fact #${fact.id}: ${fact.fact}`
      }
  })
}
