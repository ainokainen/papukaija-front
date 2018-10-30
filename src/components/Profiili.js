import React, { Component } from 'react';

class Profiili extends Component {
    render() {
        return (
            <div>
                {this.props.profiili.etunimi}<br/>
                {this.props.profiili.sukunimi}<br/>
{/*                 {this.props.tehtava.email}<br/>
                {this.props.tehtava.salasana}<br/>
                {this.props.tehtava.kuvaus}<br/>
                {this.props.tehtava.kuva}<br/>
                {this.props.tehtava.viikkotavoite}<br/>
                {this.props.tehtava.kayttajaryhma} */}
            </div>
        );
    }
}

export default Profiili;