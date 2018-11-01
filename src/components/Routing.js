import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TehtavaForm from "./crud/TehtavaForm"
import Home from "./Home";
import Profiili from './Profiili';
import {HaeKayttaja, LisaaTehtava, MuokkaaTehtavaa} from '../serviceclient';
import Done from './Done';

class Routing extends Component {
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
        
        this.tehdyt = this.state.kayttaja.Tehtava.filter(tehtava => tehtava.Tehty == true);
        this.eiTehdyt = this.state.kayttaja.Tehtava.filter(tehtava => tehtava.Tehty == false);

        return (
            <div>
                <Switch>
                    <Route exact path ="/" render = { props => <Home {...props} eiTehdytTehtavat ={this.eiTehdyt} tehtavaHandler={this.UusiTehtavaHandler} />} />
                    <Route path ="/profiili" render ={props => <Profiili {...props} profiili ={this.state}/>} />    
                    <Route path ="/done" render ={props => <Done {...props} tehdytTehtavat ={this.tehdyt}/>} />  
                    
                </Switch>                
            </div>
        );
    }
}



export default Routing;
