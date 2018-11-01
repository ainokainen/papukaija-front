import React, { Component } from 'react';
import Tehtavalista from './Tehtavalista';
import TehtavaForm from './crud/TehtavaForm';


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
                 <Tehtavalista tehtavat={this.props.tehtavat.kayttaja.Tehtava}/> 
                 <TehtavaForm tehtavaHandler= {this.props.tehtavaHandler}/>
                
            </div>
        );
    }
}

export default Home;