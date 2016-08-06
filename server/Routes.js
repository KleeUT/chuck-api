'use strict'
module.exports = (app, chuckFacts) => {
  app.get('/api/joke/random', (request, response) => {
    response.send({fact:chuckFacts.randomQuote()});
  });

  app.get('/slack/api/joke/random', (request, response) => {
    response.send(
      {
        "text": chuckFacts.randomQuote(),
      }
    );
  });
}
