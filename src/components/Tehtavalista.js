import React, { Component } from 'react';
import Tehtava from './Tehtava';

class Tehtavalista extends Component {

    render() {
        var lista = this.props.tehtavat;
        console.dir(lista);
        var kaikkiTehtavat = lista.map(
            tehtava => (<Tehtava tehtava={tehtava} key={tehtava.TehtavaID} />)
        );

        return (
            <div>
                <h3>Tehtävälista</h3>
                {kaikkiTehtavat}<br />
            </div>
        );
    }
}

export default Tehtavalista;


