import React, { Component } from 'react';
import "../App.css"
import { Media,Nav,NavItem,NavDropdown,MenuItem, Panel} from "react-bootstrap";
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
            <div>
            <div className="navi">
            <Nav bsStyle="pills" onSelect={k=>this.handleSelect(k)}>
                <NavItem className="navItems" eventKey="1" href="/">
                    <br/>Home<br/><br/><br/>
                </NavItem>
                <NavItem className="navItems" eventKey="2" href="/Profiili">
                    <br/> 

                Kayttajan tiedot<br/><br/>
                </NavItem>
                <NavItem className="navItems" e eventKey="3" href="/done">
                <br/>Tehdyt<br/><br/><br/>
                </NavItem>
                
            <NavDropdown className="navItems" eventKey="4" title="Profiili" id="nav-dropdown">
                <br/><br/>
                <MenuItem eventKey="4.1">Action</MenuItem>
                <MenuItem eventKey="4.2">Another action</MenuItem>
                <MenuItem eventKey="4.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4.4">Separated link</MenuItem>
            </NavDropdown>
        </Nav>
        </div>
        <div className="panelwidth">
        <Panel id="omapanel" collapsible defaultExpanded>
            <Panel.Heading className="paneeliheading">
            <input className="bDone" type="button" value="Done!"/>
            <input className="bPoista" type="button" value="Poista!"/>
            <Panel.Title toggle>Tekemätön tehtävä otsikko </Panel.Title>
            </Panel.Heading>
           <Panel.Collapse>
                <Panel.Body>
                Tänne tehtävän tehtävän kuvaus ja informaatiota ja olisko meillä jotain muuta sälää tänne?
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
        </div>
        {/* <div className="panelwidth">
        <div>
        <Media>
        <Media.Left align="bottom">
      <img className="image" src="https://trello-attachments.s3.amazonaws.com/5bd715c372be28202555c3ef/5bd80baf68c39a065a05d18e/b2966e72bd3b5aeb14570f8a36b8e044/Gold.png" alt="parrot"responsive/>
    </Media.Left>
    <Media.Body>
      <Media.Heading>Bottom aligned media</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>
  </div>
        </div> */}
        </div>
        );
    }
}

export default Navigation ;
