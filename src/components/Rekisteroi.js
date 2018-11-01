import React, { Component } from 'react';
import {LisaaKayttaja} from '../serviceclient';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../styles/Login.css";

class Rekisteroi extends Component {
    constructor(props) {
        super(props);
            this.state = {Etunimi:'', Sukunimi:'', Email:'',Salsana:'', Viikkotavoite:'' }
    }
    
    registerHandler=(e)=>{

    }


    render() {
        return (
            <div className="Login">
            <img className="image" alt="Parrot" src="https://trello-attachments.s3.amazonaws.com/5bd715c372be28202555c3ef/5bd80baf68c39a065a05d18e/48d0d4b6ec99a43c253904be163acd8d/Silver.png" responsive/>
            <form onSubmit={this.registerHandler}>
                <FormGroup controlId="etunumi" bsSize="large">
                    <ControlLabel>Etunimi</ControlLabel>
                    <FormControl
                        autoFocus
                        value={this.state.Etunimi}
                        onChange={e =>this.handleEtunumi(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="sukunimi" bsSize="large">
                    <ControlLabel>Sukunimi</ControlLabel>
                    <FormControl
                        autoFocus
                        value={this.state.Sukunimi}
                        onChange={e =>this.handleSukunimi(e.target.value)}
                    />
                </FormGroup>
              <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="email"
                  value={this.state.Email}
                  onChange={e =>this.handleUsername(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.state.Salasana}
                  onChange={e =>this.handlePassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <FormGroup controlId="viikkotavoite" bsSize="large">
                    <ControlLabel>Viikkotavoite</ControlLabel>
                    <FormControl
                        type="number"
                        autoFocus
                        value={this.state.Viikkotavoite}
                        onChange={e =>this.handleViikkotavoite(e.target.value)}
                    />
                </FormGroup>
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                Rekisteröidy
              </Button>

              
            </form>

          </div>
        );
    }
}

export default Rekisteroi;