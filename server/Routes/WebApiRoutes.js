'use strict'
module.exports = (app, chuckFacts, chuckMemes) => {

  app.get('/api/joke/random', (request, response) => {
    response.send({fact:chuckFacts.randomQuote()});
  });
}
