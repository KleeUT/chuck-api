
module.exports = class FakeApp {
  constructor(){
    this.getPaths = {};
    this.postPaths = {};
  }

  get(route, callback){
    this.getPaths[route] = callback;
  }
  post(route, middleware, callback){
    this.postPaths[route] = callback;
  }
}
