import React, { Component } from 'react';
import "../App.css"
import {Nav,NavItem,NavDropdown,MenuItem, Panel} from "react-bootstrap";
import  "./Navigation.css";
import Home from './Home';

class Navigation extends Component {
    //Navigaation "eventit"
   handleSelect(eventKey, event) {
        event.preventDefault();
        alert(`selected ${eventKey}`);
   }   
    render() {

        return (
            <Nav bsStyle="tabs" activeKey="1" onSelect={k=>this.handleSelect(k)}>
                <NavItem eventKey="1" href="/">
                    Home
                </NavItem>
                <NavItem eventKey="2" href="/Profiili">
                Kayttajan tiedot
                </NavItem>
                <NavItem eventKey="3" disabled>
                
                </NavItem>
            <NavDropdown className="navItems" eventKey="4" title="Profiili" id="nav-dropdown">
                <MenuItem eventKey="4.1">Action</MenuItem>
                <MenuItem eventKey="4.2">Another action</MenuItem>
                <MenuItem eventKey="4.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4.4">Separated link</MenuItem>
            </NavDropdown>
        </Nav>
    
        <div>
        <Panel id="omapanel" collapsible defaultExpanded>
            <Panel.Heading className="">
            <Panel.Title toggle>Tekemätön tehtävä otsikko </Panel.Title>
            </Panel.Heading>
           <Panel.Collapse>
                <Panel.Body>
                Tänne tehtävän tehtävän kuvaus ja informaatiota ja olisko meillä jotain muuta sälää tänne?
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
    

        </div>
        </div>
        );
    }
}

export default Navigation ;
