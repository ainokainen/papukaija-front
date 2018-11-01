import React, { Component } from 'react';

class Tehtava extends Component {
    render() {
        return (
            <div>
               Tehtävän nimi:<br/> {this.props.tehtava.Nimi}<br/>
                Kuvaus: <br/> {this.props.tehtava.Kuvaus}<br/><br/>
                {/* Tehty: {(this.props.tehtava.Tehty).toString()}<br/> */}
                {/* {this.props.tehtava.pisteet}<br/>
                {this.props.tehtava.kuva}<br/>
                {this.props.tehtava.aikaleima}<br/>
                {this.props.tehtava.kategoria}<br/>
                {this.props.tehtava.tehty}<br/> */}


            </div>
        );
    }
}

export default Tehtava;