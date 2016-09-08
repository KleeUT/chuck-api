export default class{
  constructor(store){
    this.store = store;
  }

  get() {
    var xhttp = new XMLHttpRequest();
    var store = this.store;
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var value = JSON.parse(xhttp.responseText);
        console.log("ssssss");
        store.dispatch({
          type:"NewFact",
          factData: { id: value.fact.id, fact: value.fact.fact }
        });
      }
    };

    xhttp.open("GET", "/api/joke/random", true);
    xhttp.send();
  }

}
