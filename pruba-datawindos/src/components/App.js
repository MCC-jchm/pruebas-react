import { bindActionCreators } from "redux";
import {connect} from "react-redux";

import * as actionCreators  from '../actions/actionCreators';

import Catalogo from './Catalogo';

function mapStateToProps(state){
    return{
       state
    }
}

function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect (mapStateToProps, mapDispachToProps)(Catalogo);
export default App;
