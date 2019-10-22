import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './post';
import comments from './comments';

const rootReduccer = combineReducers ({
    posts,
    comments,
    router: routerReducer
})

export default rootReduccer;