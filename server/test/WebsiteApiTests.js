var assert = require('chai').assert;
var routes = require('../Routes/WebApiRoutes.js');
var FakeApp = require('./FakeApp.js');
  describe("Webiste Api", () => {
      it("Sends a random quote", () => {
        var fakeApp = new FakeApp();
        routes(
          fakeApp,
          {
            randomQuote: () => {
              return { id:"13", fact: 'Facty fact mc fact pants' };
            }
          });

        var calledBack = false;
        fakeApp.getPaths["/api/joke/random"]({query:{token:"token", text:""}},{
          send:(json) =>{
            assert.deepEqual(json, {fact:{ id:"13", fact: 'Facty fact mc fact pants' }})
            calledBack = true;
          }
        });

        assert.isTrue(calledBack);
      });
  });
