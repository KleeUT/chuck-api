'use strict'
var assert = require('chai').assert;
var routes = require('../Routes/SlackApiRoutes.js');
var FakeApp = require('./FakeApp.js');

  describe("Slack Api", () => {
    it("Sends a random quote", () =>{
      var fakeApp = new FakeApp();
      routes(
        fakeApp,
        {
          randomQuote: () => {
            return { id:"13", fact: 'Facty fact mc fact pants' };
          }
        });

      var calledBack = false;
      fakeApp.postPaths["/slack/api/joke/random"]({ body: { token:"tokeyTokenson", text:""}},{
        send:(json) =>{
          assert.deepEqual(json, {
            response_type:"in_channel",
             text: 'Chuck fact #13: Facty fact mc fact pants',
             token: 'tokeyTokenson'
           })
          calledBack = true;
        }
      });

      assert.isTrue(calledBack);
    });


      it("Sends a random meme", () =>{
        var fakeApp = new FakeApp();
        routes(
          fakeApp,
          {},{
            randomMeme: () => {
              return "path/to/meme";
            }
          });

        var calledBack = false;
        fakeApp.postPaths["/slack/api/joke/random"]({ body: { token:"tokeyTokenson", text:"meme"}},{
          send:(json) =>{
            assert.deepEqual(json, {
              response_type:"in_channel",
               text: 'Chuck meme! Haha! Funny!',
               token: 'tokeyTokenson',
               attachments: [{
                 fallback:"a meme of Chuck Norris, it's funny",
                 image_url:"https://chuck-api.herokuapp.com/memes/path/to/meme"
               }]
             })
            calledBack = true;
          }
        });

        assert.isTrue(calledBack);
      });
  });
// });
