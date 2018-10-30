import React, { Component } from 'react';
import './App.css';
import TehtavaBox from "./components/TehtavaBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TehtavaBox/>
        </header>
      </div>
    );
  }
}

export default App;
