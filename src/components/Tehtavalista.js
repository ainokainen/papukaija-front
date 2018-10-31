import React, { Component } from 'react';
import Tehtava from './Tehtava';

class Tehtavalista extends Component {
    
    render() {
        console.log("Tehtävälista "+this.props.tehtavat.kayttaja.Tehtava);
        var kaikkiTehtavat= this.props.tehtavat.kayttaja.Tehtava
            .map(function(task){
                return (<Tehtava tehtava={task} key = {task.TehtavaID}/>)
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


