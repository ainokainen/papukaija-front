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
                            <h5> Nimi: </h5> {this.props.profiili.kayttaja.Etunimi} {this.props.profiili.kayttaja.Sukunimi}
                            </Panel.Body>
                            <Panel.Body>
                            <h5>Sähköpostiosoite: </h5>{this.props.profiili.kayttaja.Email}<br/>
                            </Panel.Body>
                            <Panel.Body>
                            <h5>Kuvausteksti: </h5>{this.props.profiili.kayttaja.Kuvaus}<br/>  
                            </Panel.Body>
                            {this.props.profiili.kayttaja.Kuva}<br/>

                    </Panel>
                
            </div>
        );
    }
}

export default Profiili;