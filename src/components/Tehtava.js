import React, { Component } from 'react';

class Tehtava extends Component {
    render() {
        return (
            <div>
                {this.props.tehtava.Nimi}<br/>
                {this.props.tehtava.Kuvaus}<br/>
                {/* {this.props.tehtava.TehtavaID} <br/> */}
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