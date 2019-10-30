import React, { Component } from 'react';
import Fila from './Fila';
class Catalogo extends Component {
    
    render() {
        return (

            <table>
                <thead><tr><h1>Soy el catalogo</h1></tr>
                </thead>
                <tbody>
                    {this.props.state.filas.map(( fila, i ) => <Fila fila={fila} key={i} /> )}
                </tbody>
                <tfoot></tfoot>
            </table>

        )
    }
}

export default Catalogo;
