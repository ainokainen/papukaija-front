import React, { Component } from 'react';
import Tehtavalista from "./Tehtavalista";
import Profiililista from "./Profiililista";
import TehtavaForm from "./crud/TehtavaForm";


var data= [{nimi:"Soita lääkäriin", kuvaus:"Varaa gynekologi"}]
var data2= [{id: "1", etunimi:"Anna", sukunimi:"Malli"}]

class TehtavaBox extends Component {
    constructor (props){
        super (props)
        this.state = {todo: data2, nextid: data2.length};
      
    }

    luoTask = (task) => {
        console.log(task);
        var nextID = data2.lenght + 1;
        task.id = nextID;
        this.state.todo.push(task);
        this.setState(this.state);        
    }

    render() {
        return (
            <div>
                <Profiililista profiilit={data2}/>
                <Tehtavalista tehtavat={data}/>
                <TehtavaForm luoTehtava = {this.luoTask}/>
            </div>
        );
    }
}

export default TehtavaBox;


