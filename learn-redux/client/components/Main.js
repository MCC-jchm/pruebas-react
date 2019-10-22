import React from 'react';
import { Link } from 'react-router';
const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
            </div>)
    }
});
/*         {React.cloneElement(this.props.children, this.props)}
class Main extends React.Component{
    render(){
        return (
        <div>
            <h1>Reduxtagram</h1>
            

        </div>);
    }
}
*/


export default Main;
