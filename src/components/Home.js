import React, { Component } from 'react';
import Tehtavalista from './Tehtavalista';
import TehtavaForm from './crud/TehtavaForm';


class Home extends Component {
    render() {
        
        return (
            <div>
                 <Tehtavalista tehtavat={this.props.eiTehdytTehtavat}/> 
                 <TehtavaForm tehtavaHandler= {this.props.tehtavaHandler}/>
            </div>
        );
    }
}

export default Home;