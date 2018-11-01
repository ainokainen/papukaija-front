import React, { Component } from 'react';
import './App.css';
import TehtavaBox from "./components/TehtavaBox";
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div> 
        <div className="App-header">     
        <Navigation/>
        </div><div>
        <TehtavaBox/> 
        </div>
      </div>
    );
  }
}

export default App;
