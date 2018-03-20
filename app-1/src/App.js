import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      userInput : ''
    }
  }

  updateValue(val)
  {
    this.setState({userInput : val})
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input className ="inputLine" onChange ={event =>this.updateValue(event.target.value)}/>
        <h4> Entered String is :-  {this.state.userInput} </h4>
      </div>
    );
  }
}

export default App;