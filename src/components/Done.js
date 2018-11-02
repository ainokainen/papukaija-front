import React, { Component } from 'react';
import TehdytTehtavat from './listaTehdytTehtavat';

class Done extends Component {
    render() {
        return (
            <div>

                <TehdytTehtavat tehtavat={this.props.tehdytTehtavat}/> 
            </div>
        );
    }
}

export default Done;