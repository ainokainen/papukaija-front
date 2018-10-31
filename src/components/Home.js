import React, { Component } from 'react';
import Tehtavalista from './Tehtavalista';

class Home extends Component {
    render() {
        console.log("Home "+this.props.tehtavat);
        return (
            <div>
                <p>Home</p>
                {/* <Tehtavalista tehtavat= {this.props.tehtavat}/> */}
            </div>
        );
    }
}

export default Home;