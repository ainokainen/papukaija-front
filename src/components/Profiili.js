import React, { Component } from 'react';
import {Image, Media,Nav,NavItem,NavDropdown,MenuItem, Panel} from "react-bootstrap";


class Profiili extends Component {
    render() {
       
        return (
            <div className = 'panelwidth'>

                <Panel id="omapanel">
                    <Panel.Heading className="">
                       <Panel.Title > Käyttäjäprofiili </Panel.Title>
                        </Panel.Heading>
                            <Panel.Body> 
                            <h5> Nimi: </h5> {this.props.profiili.Etunimi} {this.props.profiili.Sukunimi}
                            </Panel.Body>
                            <Panel.Body>
                            <h5>Sähköpostiosoite: </h5>{this.props.profiili.Email}<br/>
                            </Panel.Body>
                            <Panel.Body>
                            <h5>Kuvausteksti: </h5>{this.props.profiili.Kuvaus}<br/>  
                            </Panel.Body>
                            {this.props.profiili.Kuva}<br/>

                    </Panel>
                
            </div>
        );
    }
}

export default Profiili;