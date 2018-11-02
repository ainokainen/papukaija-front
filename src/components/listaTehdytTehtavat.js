import React, { Component } from 'react';
import Tehtava from './Tehtava';
import { Panel} from "react-bootstrap";

class TehdytTehtavat extends Component {
    

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
                {kaikkiTehtavat}
                <br />
            </div>
        );
    }
}

export default TehdytTehtavat;