import React, { Component } from 'react';
import Tehtava from './Tehtava';
import {Image, Media,Nav,NavItem,NavDropdown,MenuItem, Panel} from "react-bootstrap";

class Tehtavalista extends Component {

    render() {
        var lista = this.props.tehtavat;
        console.dir(lista);
        var kaikkiTehtavat = lista.map(
            tehtava => (
                    <div className="panelwidth">
                        <Panel id="omapanel" collapsible defaultCollapsed>
                        <Panel.Heading className="">
                            <Panel.Title toggle>{tehtava.Nimi}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <Panel.Body>
                                <Tehtava tehtava={tehtava} key={tehtava.TehtavaID} />
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel>
                    </div>
            )
        );

        return (

            <div>
                {/* <div className="panelwidth">
                <Panel id="omapanel" collapsible defaultExpanded>
                    <Panel.Heading className="">
                    <Panel.Title toggle>Tekemätön tehtävä otsikko </Panel.Title>
                    <input type="button"/>
                    </Panel.Heading>
                        
                </Panel>
                    
                </div> */}
                {kaikkiTehtavat}
                <h3>Tehtävälista</h3>
                <br />
            </div>
        );
    }
}

export default Tehtavalista;


