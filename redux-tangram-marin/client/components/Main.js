import React from 'react';
import {Link} from 'react-router';

/*
    La estrucura del comonente de puede definir mediante el metodo creacteclass que internamente
    hereda de la clase component de react 
*/
const Main = React.createClass({
    render(){
        return (
            <div>
                <h1> <Link to="/"> Redux </Link> </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
})
// este export es importante para que se pueeda importar el componente atraves del paquete (nombre de la carpeta)
export default Main;