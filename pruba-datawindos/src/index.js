import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';

// importar componentes 
//import Main from './components/Main';
import App from './components/App';
//import Catalogo from './components/Catalogo';
import EditCatalogo from './components/EditCatalogo';

//importar componentes de react router
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Provider } from "react-redux";

import filas from './data/posts';
import rootReducer from './reducers'
const defaul_state = {filas};
const store = createStore(rootReducer, defaul_state);


const router = (
    <Provider store={store}>
        <Router >
            <Switch>
                <Route path="/view/:id" component={EditCatalogo}></Route>
                <Route path="/" component={App} ></Route>
            </Switch>
        </Router>
    </Provider>


)


ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
