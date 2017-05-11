import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './reducers'
import About from './components/About';
import Contacts from './components/Contacts';
import Lists from './components/Lists';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './fed.css';

let middleware = [thunk];

// Add thunk middleware so that you can invoke async actions with redux "dispatch"
const store = createStore(rootReducer, applyMiddleware(...middleware));

const history = syncHistoryWithStore(browserHistory, store);

render((
    <Provider store={store}>
        <Router history={history} >
            <Route path="/ui/accounts/:accountId" component={App}>
                <IndexRedirect to="contacts" />
                <Route path="contacts" component={Contacts}/>
                <Route path="lists" component={Lists}/>
                <Route path="about" component={About}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));
