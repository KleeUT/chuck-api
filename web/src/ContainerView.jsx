// import React from 'react';

var SlackButton = () => {
  return (
    <a href="https://slack.com/oauth/authorize?scope=incoming-webhook,commands&client_id=3358490050.67017692769" >
      <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
    </a>
  )
}

var NewFactButton = (props) =>{
  return (<button className="btn btn-primary btn-lg btn-outline btn-block" onClick={props.onClick}>
    Random Chuck Fact (new Button)
  </button>);
}

var ContainerView = class extends React.Component{
    constructor(props){
        super();
        props.store.subscribe(this.stateChange.bind(this))
        this.factGetter = props.factGetter;
        this.state = {
          factId: props.store.getState().fact.id,
          fact: props.store.getState().fact.fact};
        this.store = props.store;
    }

    stateChange(){
        var storeState = this.store.getState();
        this.setState({factId:storeState.fact.id, fact:storeState.fact.fact });
    }

    getFact(){
      this.factGetter.get();
    }

    render(){
        var style = {
          container:{
            backgroundColor:"rgba(255,255,255,0.7)",
          },
          smallText:{
            fontSize:"90%"
          },
          largeText:{
            fontSize:"150%"
          }
        }

        return (
          <div  className="container" style={style.container}>
            <div className="row">
              <div className="container">
                <h1>Chuck Norris Facts</h1>
                <p style={style.smallText}>Scientifically proven by FCNRI (Fictionaly Chuck Norris Research Institue)</p>
                </div>
            </div>
            <div className="row">
                <div className="form-group">
                <div className="col-xs-12">
                  <NewFactButton onClick={this.getFact.bind(this)}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h1> {this.state.factId ? `Chuck Norris Fact No. ${this.state.factId}` : ""}</h1>
                <p style={style.largeText}>{this.state.fact}</p>
              </div>
            </div>

            <div className="row">
              <div className="text-right">
                <SlackButton />
              </div>
            </div>
        </div>
        )
    }
}

module.exports = ContainerView;
