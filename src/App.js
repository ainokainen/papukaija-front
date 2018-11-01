import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Routing from "./components/Routing";
import Navigation from "./components/Navigation";
import {HaeKayttaja, LisaaTehtava, MuokkaaTehtavaa} from './serviceclient';

class App extends Component {
  constructor (props){
    super (props);
    this.state ={kayttaja: {Tehtava: []}}
  }
  
  componentDidMount = () => {
      this.KayttajanHaku();
  }
  // Tässä käyttäjän hakeminen tietokannasta, myös renderin päivityskäytössä!
  KayttajanHaku = () =>{
    HaeKayttaja(this.AsetaStateen );  
  }
  AsetaStateen = value =>{
    this.setState({kayttaja: value})
    console.log("App:ssa state: "+this.state);
  }

  // Uuden tehtävän lisäys kantaan
  UusiTehtavaHandler = (task) => {
    console.log("seuraavaksi terveisiä app uuden tehtävän handlerista")
    console.log(task);
    LisaaTehtava(task, this.KayttajanHaku);
}

MuokkaaTehtavaaHandler = (task) => {
  console.log("seuraavaksi terveisiä muokkaatehtavaa handlerista")
  console.log(task);
  MuokkaaTehtavaa(task, this.KayttajanHaku);
}
  
  
  
  render() {

    return (      
      <Router>
        <div className="App">
          
          <header className="App-header">
          <Navigation/>
          <Routing kayttaja = {this.state} tehtavaHandler={this.UusiTehtavaHandler}/>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;

