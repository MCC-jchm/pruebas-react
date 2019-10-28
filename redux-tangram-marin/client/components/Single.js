import React from 'react';


const Single = React.createClass({
    render(){
        return (
            <div className="single-photo">
                soy  solo una foto
            </div>
        )
    }
})
// este export es importante para que se pueeda importar el componente atraves del paquete (nombre de la carpeta)
export default Single;