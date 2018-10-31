import React, { Component } from 'react';

class Profiili extends Component {
    render() {
        return (
            
            <div>
                {this.props.profiili.kayttaja.Etunimi}<br/>
                {this.props.profiili.kayttaja.Sukunimi}<br/>
                 {this.props.profiili.kayttaja.Email}<br/>
                {this.props.profiili.kayttaja.Kuvaus}<br/>
                {this.props.profiili.kayttaja.Kuva}<br/>
                {this.props.profiili.kayttaja.Viikkotavoite}<br/>
            </div>
        );
    }
}

export default Profiili;