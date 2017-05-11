import { combineReducers } from 'redux'
import * as Helpers from '../helpers/lists'

const listsReducer = (state = { lists: [] }, action) => {
  switch (action.type) {
    case 'SELECT_LIST':
      console.log('hit RECEIVE_LISTS');
      return Helpers.selectList(state.lists, action.list_id);

    case 'DESELECT_LIST':
      console.log('hit DESELECT_LIST');
      return Helpers.deselectList(state.lists, action.list_id);

    case 'SELECT_ALL_LISTS':
      console.log('hit SELECT_ALL_LISTS');
      return Helpers.selectAllLists(state.lists);

    case 'DESELECT_ALL_LISTS':
      console.log('hit DESELECT_ALL_LISTS');
      return Helpers.deselectAllLists(state.lists);

    case 'RECEIVE_LISTS':
      console.log('hit RECEIVE_LISTS');
      return { lists: action.lists };

    default:
      console.log('hit default ' + action.type);
      return state;
  }
};

export default listsReducer;
