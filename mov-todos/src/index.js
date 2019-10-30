import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import todos from'./data/comments'

const defaul_state = {todos}
const store = createStore(rootReducer, defaul_state);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
