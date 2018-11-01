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
    this.state ={kayttaja: {Tehtava: []}}
  }
  
  componentDidMount = () => {
    HaeKayttaja(this.AsetaStateen );    
  }
  AsetaStateen = value =>{
    this.setState({kayttaja: value})
    console.log("App:ssa state: "+this.state);
  }
  
  
  render() {

    return (
      //     Jumbotronia käytetty mallissa
      <Router>
        <div className="App">
          
          <header className="App-header">
          <Navigation/>
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

