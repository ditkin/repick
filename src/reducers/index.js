import { combineReducers } from 'redux'
import * as Helpers from '../helpers/lists'

const listsReducer = (state = { lists: [] }, action) => {
  switch (action.type) {
    case 'SEARCH_LISTS':
      console.log('hit SEARCH_LISTS');
      return { lists: Helpers.searchLists(state.lists, action.value) }

    case 'SELECT_LIST':
      console.log('hit SELECT_LIST');
      return { lists: Helpers.selectList(state.lists, action.list_id) }

    case 'DESELECT_LIST':
      console.log('hit DESELECT_LIST');
      return { lists: Helpers.deselectList(state.lists, action.list_id) }

    case 'SELECT_ALL_LISTS':
      console.log('hit SELECT_ALL_LISTS');
      return { lists: Helpers.selectAllLists(state.lists) }

    case 'DESELECT_ALL_LISTS':
      console.log('hit DESELECT_ALL_LISTS');
      return { lists: Helpers.deselectAllLists(state.lists) }

    case 'RECEIVE_LISTS':
      console.log('hit RECEIVE_LISTS');
      return { lists: action.lists };

    default:
      console.log('hit default ' + action.type);
      return state;
  }
};

export default listsReducer;
