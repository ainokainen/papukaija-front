import React, { Component } from 'react';
import '../Form.css';
import { Form, ControlLabel } from "react-bootstrap";


class TehtavaForm extends Component {
    constructor (props){
        super (props)
        
        this.state= {Nimi:" ", Kuvaus:" ", Pisteet: "  ", KayttajaID:this.props.kayttajaID, Kuva: null,  Aikaleima: this.DateHandler(), Kategoria: "  ", Julkinen: 0, Tehty:0}
    }

        DateHandler(){
            var tanaan = new Date();
            var mm = tanaan.getMonth();
            var dd = tanaan.getDate();
            var yyyy = tanaan.getFullYear();
            if(dd < 10){
                dd= '0'+dd;
            }
            if(mm < 10){
                mm = '0'+mm
            }
            tanaan = yyyy+'-'+mm+'-'+dd;
            this.setState({aikaleima: tanaan})
        };
       luoT=(event)=>{
           event.preventDefault();
           console.log("Seuraavaksi terveisiä tformilta")
           console.log(this.state);
           this.props.tehtavaHandler(this.state);
       }
       nimiChange = (e) => {
           this.setState({Nimi: e.target.value});
       }
       kuvausChange = (e) => {
           this.setState({Kuvaus: e.target.value});
       }

       pisteetChange = (e) => {
           this.setState({Pisteet: parseInt(e.target.value)});
       }

       kuvaChange = (e) => {
           this.setState({Kuva: e.target.value});
       }

       kategoriaChange = (e) => {
           this.setState({Kategoria: e.target.value});
       }

  
   
       render() {
           return (
               <div>
               <Form horizontal>
                   <ControlLabel>Lisää uusi tehtävä</ControlLabel><br/>
                   Nimi: <input type="text" onChange={this.nimiChange} value ={this.state.Nimi}/> <br/>
                   Kuvaus: <input type="text" onChange = {this.kuvausChange} value = {this.state.Kuvaus} /> <br/>
                   Pisteet: <input type="number" onChange = {this.pisteetChange} value = {this.state.Pisteet} /> <br/>
                   
                   <input type="button" value = "lisää" onClick ={this.luoT} />
               </Form>
               </div>
           );
       }
    }
export default TehtavaForm;