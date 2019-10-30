import React, { Component } from 'react';

class Fila extends Component {
    
    render() {
        let myTDS = [];
        console.log(this.props.fila);
        for(var k in this.props.fila) {
            console.log(k, this.props.fila[k]);
            myTDS.push(this.props.fila[k]);
         }

        return (
            <tr>
               { myTDS.map( (value) => <td> {value} </td> )}
            </tr>

        )
    }
}

export default Fila;
