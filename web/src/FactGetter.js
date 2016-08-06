export default (store) =>{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var value = JSON.parse(xhttp.responseText);
      for(let a in value){
      }
      store.dispatch({
        type:"NewFact",
        factData: { id: value.fact.id, fact: value.fact.fact }
      });
    }
  };

  xhttp.open("GET", "/api/joke/random", true);
  xhttp.send();
}
