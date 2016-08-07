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
      "attachments":[{
        "fallback": "a meme of Chuck Norris, it's funny",
        "image_url":"https://chuck-api.herokuapp.com/memes/swim.jpg"
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


{
    "attachments": [
        {
            "fallback": "Required plain-text summary of the attachment.",
            "color": "#36a64f",
            "pretext": "Optional text that appears above the attachment block",
            "author_name": "Bobby Tables",
            "author_link": "http://flickr.com/bobby/",
            "author_icon": "http://flickr.com/icons/bobby.jpg",
            "title": "Slack API Documentation",
            "title_link": "https://api.slack.com/",
            "text": "Optional text that appears within the attachment",
            "fields": [
                {
                    "title": "Priority",
                    "value": "High",
                    "short": false
                }
            ],
            "image_url": "http://my-website.com/path/to/image.jpg",
            "thumb_url": "http://example.com/path/to/thumb.png",
            "footer": "Slack API",
            "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
            "ts": 123456789
        }
    ]
}
