import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import Popper from "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Jumbotron} from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import TehtavaBox from "./components/TehtavaBox";
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      // <Jumbotron>
      <div className="App">
        <header className="App-header">
          <Navigation/>
        </header>
          <TehtavaBox/>
      </div>
      // </Jumbotron>
    );
  }
}

export default App;
