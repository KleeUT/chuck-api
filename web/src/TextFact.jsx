var TextFact = (props) => {
  var style = {
    largeText:{
      fontSize:"150%"
    }
  }
  return (
    <div className="col-xs-12">
      <h1> {props.factId ? `Chuck Norris Fact No. ${props.factId}` : ""}</h1>
      <p style={style.largeText}>{props.fact}</p>
    </div>
  )
}

module.exports = TextFact;
