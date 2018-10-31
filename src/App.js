import React, { Component } from 'react';
import './App.css';
import TehtavaBox from "./components/TehtavaBox";
import {BrowserRouter as Router} from 'react-router-dom';
import Routing from "./components/Routing";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Routing/>
        <header className="App-header">
          <TehtavaBox/>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;

