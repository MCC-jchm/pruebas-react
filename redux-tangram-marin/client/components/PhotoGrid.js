import React from 'react';
import Photo from './Photo';


const PhotoGrid = React.createClass({
    render(){
        return (
            <div className="photo-grid">
                {this.props.posts.map( (post, i) => <Photo {...this.props} key={i} i={i} post={post} /> )}

                    {/*JSON.stringify(this.props.posts,null, '')*/}
            
            </div>
        )
    }
})
// este export es importante para que se pueeda importar el componente atraves del paquete (nombre de la carpeta)
export default PhotoGrid;