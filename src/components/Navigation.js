import React, { Component } from 'react';
//import classNames from 'classnames';
//import keycode from 'keycode';
// import React, { cloneElement } from 'react';
//import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';
//import all from 'prop-types-extra/lib/all';
//import warning from 'warning'; 
//import $ from "jquery";
//import Popper from "popper.js";
import "../App.css"
import {Nav,NavItem,NavDropdown,MenuItem, Panel} from "react-bootstrap";
import  "./Navigation.css";

class Navigation extends Component {
    //Navigaation "eventit"
   handleSelect(eventKey, event) {
        event.preventDefault();
        alert(`selected ${eventKey}`);
   }   
    render() {

        return (
           <div> 
          
           <Nav className="headerElements" activeKey="1" onSelect={k=>this.handleSelect(k)}>
                <NavItem  className="navItems" eventKey="1" href="/home">
                NavItem 1
                </NavItem>
                <NavItem className="navItems" eventKey="2" href="Item">
                NavItem 2
                </NavItem>
                <NavItem className="navItems" eventKey="3" disabled>
                NavItem dis
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
