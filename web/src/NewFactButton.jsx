var NewFactButton = (props) =>{
  return (<button className="btn btn-primary btn-lg btn-outline btn-block" onClick={props.onClick}>
    {props.text}
  </button>);
}

module.exports = NewFactButton;
