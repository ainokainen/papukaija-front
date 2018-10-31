import React, { Component } from 'react';
import Tehtava from './Tehtava';

class Tehtavalista extends Component {

    render() {
        // console.log(this.props.tehtavat);
        // var kaikkiTehtavat= this.props.tehtavat.map(function(task){
        //         return (<Tehtava tehtava={task} key = {task.TehtavaID}/>)
        //     })
        var lista = this.props.tehtavat;
        console.dir(lista);
        var kaikkiTehtavat = lista.map(
            tehtava => (<Tehtava tehtava={tehtava} key={tehtava.TehtavaID} />)
        );

        // var kaikkiTehtavat = lista.map();

        return (
            <div>
                <h3>Tehtävälista</h3>
                {kaikkiTehtavat}<br />
            </div>
        );
    }
}

export default Tehtavalista;


