// import React from 'react';
// import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import FactGetter from './FactGetter.js';
import ContainerView from './ContainerView.jsx';

var fact = (state = {}, action) =>{

  if(action.type !== "NewFact") {
    return state;
  }

  return {id:action.factData.id, fact:action.factData.fact};
}

var reducer = combineReducers({ fact });
var store = createStore(reducer);

var factGetter = new FactGetter(store);
ReactDOM.render(
    <ContainerView store={store} factGetter={factGetter}  />,
    document.getElementById('main')
)
