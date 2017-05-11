import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './components/App';
import './fed.css';

const store = createStore(rootReducer);

render((
    <Provider store={store}>
        <div>MCJAJA</div>
    </Provider>
), document.getElementById('root'));