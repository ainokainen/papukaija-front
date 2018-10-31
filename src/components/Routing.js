import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import TehtavaForm from "./crud/TehtavaForm"
import Home from "./Home";
import Profiili from './Profiili';
import { HaeKayttaja } from '../serviceclient';


// var data2= {id: "1", etunimi:"Anna", sukunimi:"Malli"};

class Routing extends Component {
    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path ="/" render = { props => <Home {...props} tehtavat ={this.props.kayttaja} />} />
                    <Route path ="/TehtavaForm" component={TehtavaForm} /> 
                    <Route path ="/profiili" render ={props => <Profiili {...props} profiili ={this.props.kayttaja}/>} />                    
                </Switch>                
            </div>
        );
    }
}



export default Routing;
