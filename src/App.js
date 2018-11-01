
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routing from "./components/Routing";
import Navigation from "./components/Navigation";
import Login from './components/Login';


class App extends Component {
  
  render() {

    return (      
      <Router>
        <div className="App">
          
<<<<<<< HEAD
          <header className="App-header">
          <Navigation/>
          </header>
          <div>
          <Routing kayttaja = {this.state}/>
=======
         
            <Login/>
          
>>>>>>> jouni
          </div>
        
      </Router>
    );
  }
}

export default App;

