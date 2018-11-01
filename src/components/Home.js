import React, { Component } from 'react';
import Tehtavalista from './Tehtavalista';

class Home extends Component {
    constructor (props){
        super (props);
        this.lista = this.props.tehtavat.kayttaja.Tehtava;
        // this.parsittuTehtavaLista =JSON.parse(this.lista);

    }
    render() {
        console.log(this.lista);
        console.log(this.props.tehtavat.kayttaja.Tehtava);
        
        return (
            <div>
                <p>Home</p>
                { <Tehtavalista tehtavat={this.props.tehtavat.kayttaja.Tehtava}/> }
            </div>
        );
    }
}

export default Home;