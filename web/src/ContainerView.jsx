var SlackButton = require('./SlackButton.jsx');
var NewFactButton = require('./NewFactButton.jsx');
var TextFact = require('./TextFact.jsx');

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
                  <NewFactButton onClick={this.getFact.bind(this)}
                    text="Random Chuck Fact"/>
                </div>
              </div>
            </div>
            <div className="row">
              <TextFact factId={this.state.factId} fact={this.state.fact} />
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
