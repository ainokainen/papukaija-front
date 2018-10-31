import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import Popper from "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Jumbotron} from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import TehtavaBox from "./components/TehtavaBox";
import {BrowserRouter as Router} from 'react-router-dom';
import Routing from "./components/Routing";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      //     Jumbotronia käytetty mallissa
      <Router>
            <div className="App">
                  <Routing/>
                  <header className="App-header">
                  <Navigation/>
                  </header>
                  <TehtavaBox/>
            </div>
      </Router>
    );
  }
}

export default App;

