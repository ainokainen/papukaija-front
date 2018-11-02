import React, { Component } from 'react';
import Tehtava from './Tehtava';
import { Panel} from "react-bootstrap";
import '../styles/Tehtavat.css'
import '../App.css'

class Tehtavalista extends Component {
    

    render() {
        this.PoistajaHandler =(event) =>{
            var id = event.target.attributes.getNamedItem('data-id').value;
            this.props.poistaTehtava(id);
        }

        var lista = this.props.tehtavat;
        console.dir(lista);
        var kaikkiTehtavat = lista.map(
            tehtava => (
                    <div className="panelwidth">
                        <Panel collapsible defaultCollapsed>
                        <Panel.Heading >
                            <button className="poistaButton" data-id={tehtava.TehtavaID} onClick={this.PoistajaHandler} >Poista</button>
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
                {kaikkiTehtavat}
            </div>
        );
    }
}

export default Tehtavalista;


