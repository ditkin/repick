import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

const contactsReducer = (state = {contacts: [], count: 0}, action) => {

    switch (action.type) {
        case 'DELETE':
            console.log('hit DELETE');
            return {contacts: [], count: 0};
        case 'REQUEST_CONTACTS':
            console.log('hit REQUEST_CONTACTS');
            return {...state};
        case 'RECEIVE_CONTACTS':
            console.log('hit RECEIVE_CONTACTS');
            return {...state, contacts: action.contacts, count: action.count};
        default:
            console.log('hit default ' + action.type);
            return state;
    }
};

const rootReducer = combineReducers({
    contactsReducer,
    routing: routerReducer
});

export default rootReducer
