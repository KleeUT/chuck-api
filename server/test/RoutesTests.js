'use strict'
var assert = require('chai').assert;
var routes = require('../Routes.js');

describe("Routes", () => {
  describe("Webiste Api", () => {
      it("Sends a random quote", () => {
        var fakeApp = new FakeApp();
        routes(
          fakeApp,
          {
            randomQuote: () => {
              return "quoteymcquotequote";
            }
          });

        var calledBack = false;
        fakeApp.paths["/api/joke/random"]({},{
          send:(json) =>{
            assert.deepEqual(json, { fact: 'quoteymcquotequote' })
            calledBack = true;
          }
        });

        assert.isTrue(calledBack);
      });
  });

  describe("Slack Api", () => {
    it("Sends a random quote", () =>{
      var fakeApp = new FakeApp();
      var fakeApp = new FakeApp();

      routes(
        fakeApp,
        {
          randomQuote: () => {
            return "quoteymcquotequote";
          }
        });

      var calledBack = false;
      fakeApp.paths["/slack/api/joke/random"]({},{
        send:(json) =>{
          assert.deepEqual(json, { text: 'quoteymcquotequote' })
          calledBack = true;
        }
      });

      assert.isTrue(calledBack);
    });
  });
});

class FakeApp {
  constructor(){
    this.paths = {};
  }

  get(route, callback){
    this.paths[route] = callback;
  }
}
