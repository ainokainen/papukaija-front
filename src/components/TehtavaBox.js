import React, { Component } from 'react';
import Tehtavalista from "./Tehtavalista";
import Profiililista from "./Profiililista";


class TehtavaBox extends Component {
    

    render() {
        return (
            <div>
                <Profiililista profiilit={data2}/>
                <Tehtavalista tehtavat={data}/>
            </div>
        );
    }
}

export default TehtavaBox;

var data= [{nimi:"Soita lääkäriin", kuvaus:"Varaa gynekologi"}]
var data2= [{etunimi:"Anna", sukunimi:"Malli"}]