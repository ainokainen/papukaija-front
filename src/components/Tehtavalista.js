import React, { Component } from 'react';
import Tehtava from './Tehtava';

class Tehtavalista extends Component {
    render() {
        var kaikkiTehtavat= this.props.tehtavat
            .map(function(task){
                return (<Tehtava tehtava={task}/>)
            })
 
        return (
            <div>
                <h3>Tehtävälista</h3>
                {kaikkiTehtavat}<br/>
            </div>
        );
    }
}

export default Tehtavalista;

