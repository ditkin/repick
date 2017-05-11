import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import listsReducer from './reducers'
import App from './components/App';

import './fed.css';

render(
  <App store={createStore(listsReducer)}/>,
  document.getElementById('root')
)
