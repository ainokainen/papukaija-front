import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import TehtavaForm from "./crud/TehtavaForm"
import Home from "./Home";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Profiililista from "./Profiililista";
import Tehtava from "./Tehtavalista";
import TehtavaBox from "./TehtavaBox";


class Routing extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path ="/" component={Home} />
                    <Route path ="/TehtavaForm" component={TehtavaForm} />                    
                </Switch>                
            </div>
        );
    }
}



class Navigation extends Component {
    render() {
        return (
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Koti</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem href="/TehtavaFrom">Luo tehtävä</NavItem>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>       
         );
    }
}


export default Routing;
