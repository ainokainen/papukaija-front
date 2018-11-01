
import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Routing from './components/Routing';


class App extends Component {
  state={kayttajaLogInilta: false};

  // asetetaan kannasta tuotu user stateen, jos login onnistui
  LoginOnnistui = (user) =>{
    this.setState({kayttajaLogInilta:user});
  }
  render() {

    return ( 
      <Router>
        <div>
        {!this.state.kayttajaLogInilta && <Route exact path ="/" render ={props => <Login {...props} user={this.state.kayttajaLogInilta} onnistuikoLogin={this.LoginOnnistui}/>}/>}

        {this.state.kayttajaLogInilta && <Routing user = {this.state.kayttajaLogInilta}/>}
        </div>
      </Router>
        
    );
  }
}

export default App;

