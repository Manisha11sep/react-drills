import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor (){
  super();
  this.state = {
    fruits : ['Apple', 'Orange', 'Grapes', 'Pears']
  }
}

  render() {
    return (
      <div className="App" >
      <h4> List of Fruits is {this.state.fruits.map(elem =><h6> {elem} </h6>)} </h4>
        
      </div>
    );
  }
}

export default App;