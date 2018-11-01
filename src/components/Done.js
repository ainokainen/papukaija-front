import React, { Component } from 'react';
import Tehtavalista from './Tehtavalista';

class Done extends Component {
    render() {
        return (
            <div>

                <Tehtavalista tehtavat={this.props.tehdytTehtavat}/> 
            </div>
        );
    }
}

export default Done;