import React from 'react';
import {render} from 'react-dom';

import css from './styles/style.styl';
// import components
import  Main  from "./components/Main";
import  Single from './components/Single';
import  PhotoGrid from './components/PhotoGrid'

// import rect routes

import {Router, Route, IndexRoute, browserHistory} from 'react-router'

var rutas =( 
    <Router history={browserHistory}>
        <Route path="/" component={Main}></Route>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
    </Router>)
render ( rutas , document.getElementById('root'));