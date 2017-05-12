import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import listsReducer from './reducers'
import App from './containers/App'
import thunk from 'redux-thunk'
import './fed.css'
import './index.css';

const middleware = [ thunk ]
const store = createStore(
    listsReducer,
    applyMiddleware(...middleware)
)

render((
    <Provider store={store}>
        <App />
    </Provider>
    ),
    document.getElementById('root')
)
