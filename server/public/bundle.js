!function(e){function t(n){if(a[n])return a[n].exports;var c=a[n]={exports:{},id:n,loaded:!1};return e[n].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var c=a(1),r=a(2),o=n(r),i=a(3),s=n(i),l=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];return"NewFact"!==t.type?e:{id:t.factData.id,fact:t.factData.fact}},u=(0,c.combineReducers)({fact:l}),f=(0,c.createStore)(u),d=new o["default"](f);ReactDOM.render(React.createElement(s["default"],{store:f,factGetter:d}),document.getElementById("main"))},function(e,t){e.exports=Redux},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=function(){function e(t){a(this,e),this.store=t}return n(e,[{key:"get",value:function(){var e=new XMLHttpRequest,t=this.store;e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var a=JSON.parse(e.responseText);console.log("ssssss"),t.dispatch({type:"NewFact",factData:{id:a.fact.id,fact:a.fact.fact}})}},e.open("GET","/api/joke/random",!0),e.send()}}]),e}();t["default"]=c},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=function(){return React.createElement("a",{href:"https://slack.com/oauth/authorize?scope=incoming-webhook,commands&client_id=3358490050.67017692769"},React.createElement("img",{alt:"Add to Slack",height:"40",width:"139",src:"https://platform.slack-edge.com/img/add_to_slack.png",srcSet:"https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"}))},i=function(e){return React.createElement("button",{className:"btn btn-primary btn-lg btn-outline btn-block",onClick:e.onClick},"Random Chuck Fact")},s=function(e){function t(e){a(this,t);var c=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.store.subscribe(c.stateChange.bind(c)),c.factGetter=e.factGetter,c.state={factId:e.store.getState().fact.id,fact:e.store.getState().fact.fact},c.store=e.store,c}return c(t,e),r(t,[{key:"stateChange",value:function(){var e=this.store.getState();this.setState({factId:e.fact.id,fact:e.fact.fact})}},{key:"getFact",value:function(){this.factGetter.get()}},{key:"render",value:function(){var e={container:{backgroundColor:"rgba(255,255,255,0.7)"},smallText:{fontSize:"90%"},largeText:{fontSize:"150%"}};return React.createElement("div",{className:"container",style:e.container},React.createElement("div",{className:"row"},React.createElement("div",{className:"container"},React.createElement("h1",null,"Chuck Norris Facts"),React.createElement("p",{style:e.smallText},"Scientifically proven by FCNRI (Fictionaly Chuck Norris Research Institue)"))),React.createElement("div",{className:"row"},React.createElement("div",{className:"form-group"},React.createElement("div",{className:"col-xs-12"},React.createElement(i,{onClick:this.getFact.bind(this)})))),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-xs-12"},React.createElement("h1",null," ",this.state.factId?"Chuck Norris Fact No. "+this.state.factId:""),React.createElement("p",{style:e.largeText},this.state.fact))),React.createElement("div",{className:"row"},React.createElement("div",{className:"text-right"},React.createElement(o,null))))}}]),t}(React.Component);e.exports=s}]);
//# sourceMappingURL=bundle.js.map