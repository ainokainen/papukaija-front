import React, { Component } from 'react';

class Tehtava extends Component {
    render() {
        return (
            <div>                
               <h5>Tehtävä:</h5>
               {this.props.tehtava.Nimi}<br/><br/>
               <h5>Kuvaus: </h5>
               {this.props.tehtava.Kuvaus}<br/>
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