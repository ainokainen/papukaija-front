import React, { Component } from 'react';
import Tehtavalista from './Tehtavalista';
import TehtavaForm from './crud/TehtavaForm';


class Home extends Component {
    render() {
        
        return (
            <div>
                 <Tehtavalista tehtavat={this.props.eiTehdytTehtavat} poistaTehtava ={this.props.poistaTehtava}/> 
                 <TehtavaForm tehtavaHandler= {this.props.tehtavaHandler} kayttajaID={this.props.kayttajaID}/>
            </div>
        );
    }
}

export default Home;