import * as Helpers from '../helpers/lists';

export const REQUEST_LISTS = 'REQUEST_LISTS';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const SELECT_LIST = 'SELECT_LIST';
export const DESELECT_LIST = 'DESELECT_LIST';

export const requestLists = () => ({
    type: 'REQUEST_LISTS',
})

export const receiveLists = (lists) => ({
    type: 'RECEIVE_LISTS',
    lists,
})

const parseList = (list) => ({
    favorite: list.favorite,
    list_id: list.list_id,
    membership_count: list.membership_count,
    name: list.name,
    selected: false,
    sequence_id: list.sequence_id,
    searched: true,
})

export const searchLists = (value) => ({
  type: 'SEARCH_LISTS',
  value,
})

export const selectList = (list_id) => ({
  type: 'SELECT_LIST',
  list_id,
})

export const deselectList = (list_id) => ({
  type: 'DESELECT_LIST',
  list_id,
})

export const selectAllLists = () => ({
  type: 'SELECT_ALL_LISTS',
})

export const deselectAllLists = () => ({
  type: 'DESELECT_ALL_LISTS',
})

export const fetchLists = () => dispatch => {
  dispatch(requestLists())
  const fetch_url = 'http://localhost:3000/ui/v3_access/accounts/1/lists?include_count=true';
  return fetch(fetch_url)
    .then(response => response.json())
    .then(json => dispatch(receiveLists(
      Helpers.filterEmptyLists(json.lists).map(parseList)
    )))
}

