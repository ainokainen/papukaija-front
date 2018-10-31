import React, { Component } from 'react';

class Tehtava extends Component {
    render() {
        return (
            <div>
                {this.props.tehtava.nimi}<br/>
                {this.props.tehtava.kuvaus}<br/>
                {this.props.tehtava.id} <br/>
{/*                 {this.props.tehtava.pisteet}<br/>
                {this.props.tehtava.kuva}<br/>
                {this.props.tehtava.aikaleima}<br/>
                {this.props.tehtava.kategoria}<br/>
                {this.props.tehtava.julkinen}<br/>
                {this.props.tehtava.tehty}<br/> */}

            </div>
        );
    }
}

export default Tehtava;