import React, { Component } from 'react';
import Profiili from "./Profiili";

class Profiililista extends Component {
    render() {

        var kayttajanTiedot= this.props.profiilit
            .map(function(info){
                return (<Profiili profiili={info}/>)
            }) 
        return (
            <div>
                <h3>Tehtävälista</h3>
                {kayttajanTiedot}<br/>
                
            </div>
        );
    }
}

export default Profiililista;