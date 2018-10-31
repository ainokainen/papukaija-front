import React, { Component } from 'react';

class TehtavaForm extends Component {
    constructor (props){
        super (props)
        
        this.state= {Nimi:" ", Kuvaus:" ", Pisteet: "  ", Kuva: "  ", Kategoria: "  ", Julkinen: " ", Tehty: " "}
    }
       luoT=(event)=>{
           event.preventDefault();
           console.dir(this.state);
           this.props.luoTehtava(this.state);
       }
       nimiChange = (e) => {
           this.setState({Nimi: e.target.value});
       }
       kuvausChange = (e) => {
           this.setState({Kuvaus: e.target.value});
       }

       pisteetChange = (e) => {
           this.setState({Pisteet: e.target.value});
       }

       kuvaChange = (e) => {
           this.setState({Kuva: e.target.value});
       }

       kategoriaChange = (e) => {
           this.setState({Kategoria: e.target.value});
       }

       julkinenChange = (e) => {
           this.setState({Julkinen: e.target.value});
           
       }

       tehty = (e) => {
           this.setState({Tehty: e.target.value});
       }

  
   
       render() {
           return (
               <div>
                   <h3>Lisää uusi tehtävä</h3>
                   Nimi: <input type="text" onChange={this.nimiChange} value ={this.state.Nimi}/> <br/>
                   Kuvaus: <input type="text" onChange = {this.kuvausChange} value = {this.state.Kuvaus} /> <br/>
                   Pisteet: <input type="number" onChange = {this.pisteetChange} value = {this.state.Pisteet} /> <br/>
                   Julkinen: <input type= "checkbox" onChange = {this.julkinenChange} value = {this.state.Julkinen}/> <br/> 
                   
                   <input type="button" value = "lisää" onClick ={this.luoT} />
               </div>
           );
       }
    }
export default TehtavaForm;