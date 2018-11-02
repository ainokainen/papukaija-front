import React, { Component } from 'react';
import '../Form.css';
import { Button, FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";



class TehtavaForm extends Component {
    constructor (props){
        super (props)
        
        this.state= {Nimi:" ", Kuvaus:" ", Pisteet: "  ", KayttajaID:this.props.kayttajaID, Kuva: null,  Aikaleima: this.DateHandler(), Kategoria: "  ", Julkinen: 0, Tehty:0}
    }

    validateForm() {
        return this.state.Nimi.length > 0 && this.state.Kuvaus.length > 0;
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
        };s
       luoT=(event)=>{
           event.preventDefault();
           console.log("Seuraavaksi terveisiä tformilta")
           console.log(this.state);
           this.props.tehtavaHandler(this.state);
       }
       nimiChange (e) {
           this.setState({Nimi: e});
       }
       kuvausChange (e) {
           this.setState({Kuvaus: e});
       }

       pisteetChange (e)  {
           this.setState({Pisteet: parseInt(e)});
       }

       kuvaChange (e)  {
           this.setState({Kuva: e});
       }

       kategoriaChange = (e) => {
           this.setState({Kategoria: e});
       }

  
   
       render() {
           return (
            <div className="lisaaTehtava">
               {/* <Form horizontal>
                   <ControlLabel>Lisää uusi tehtävä</ControlLabel><br/>
                   Nimi: <input type="text" onChange={this.nimiChange} value ={this.state.Nimi}/> 
                   Kuvaus: <input type="text" onChange = {this.kuvausChange} value = {this.state.Kuvaus} /> 
                   Pisteet: <input type="number" onChange = {this.pisteetChange} value = {this.state.Pisteet} />  */}
                   
                <form onSubmit={this.luoT}>
                    <FormGroup controlId="nimi" bsSize="large" class="form-horizontal">
                        <Col md ={2}>
                        <FormControl
                            autoFocus
                            placeholder="Nimi"
                            type="text"
                            onChange={e =>this.nimiChange(e.target.value)}
                        />
                        </Col>
                        <Col md ={2}>
                        <FormControl
                            placeholder="Kuvaus"
                            type="text"
                           
                            onChange={e =>this.kuvausChange(e.target.value)}
                        />
                        </Col>
                        <Col md ={2}>
                        <FormControl
                            placeholder="Pisteet"
                            type="number"
                            onChange={e =>this.pisteetChange(e.target.value)}
                        />
                        </Col>
                        
                    </FormGroup>
                    <Col md ={2}>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        >
                        Lisää
                    </Button>
                    </Col>
                    
               </form>
               </div>
               
           );
       }
    }
export default TehtavaForm;