import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import Popper from "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Jumbotron} from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Routing from "./components/Routing";
import Navigation from "./components/Navigation";
import {HaeKayttaja} from './serviceclient';

class App extends Component {
  constructor (props){
    super (props);
    this.state ={kayttaja:""}
  }
  
  componentDidMount = () => {
    HaeKayttaja(this.AsetaStateen );    
  }
  AsetaStateen = value =>{
    this.setState({kayttaja: value})
  }
  
  
  render() {

    return (
      //     Jumbotronia käytetty mallissa
      <Router>
        <div className="App">
          
          <header className="App-header">
          <Navigation/>
          <Routing kayttaja = {this.state}/>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;

