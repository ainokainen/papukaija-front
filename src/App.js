import React, { Component } from 'react';
import './App.css';
import TehtavaBox from "./components/TehtavaBox";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation/>
          <TehtavaBox/>
        </header>
      </div>
    );
  }
}

export default App;
