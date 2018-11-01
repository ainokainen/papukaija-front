import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routing from "./components/Routing";
import Navigation from "./components/Navigation";


class App extends Component {
  
  render() {

    return (      
      <Router>
        <div className="App">
          
          <header className="App-header">
          <Navigation/>
          <Routing />
          </header>
          <div>
          <Routing kayttaja = {this.state}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

