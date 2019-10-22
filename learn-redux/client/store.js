import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import reducers


//import comments

import comments from './data/comments';
import posts    from './data/posts';

//create objects for default data
const defaultState = {
    posts,
    comments
}
//create store
//history
