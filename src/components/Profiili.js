import React, { Component } from 'react';

class Profiili extends Component {
    render() {
       
        return (
            
            <div>
                {this.props.profiili.Etunimi}<br/>
                {this.props.profiili.Sukunimi}<br/>
                {this.props.profiili.Email}<br/>
                {this.props.profiili.Kuvaus}<br/>
                {this.props.profiili.Kuva}<br/>
                {this.props.profiili.Viikkotavoite}<br/>

                
            </div>
        );
    }
}

export default Profiili;