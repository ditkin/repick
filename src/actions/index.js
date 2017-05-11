const receiveLists = (lists) =>  {
  return {
    type: 'RECEIVE_LISTS',
    lists,
  };
};

const parseList = (list) => {
  return {
    favorite: list.favorite,
    list_id: list.list_id,
    membership_count: Math.floor(Math.random() * 100),
    name: list.name,
    sequence_id: list.sequence_id,
  };
};

export const selectList = (list_id) => {
  return {
    type: 'SELECT_LIST',
    list_id,
  }
};

export const deselectList = (list_id) => {
  return {
    type: 'DESELECT_LIST',
    list_id,
  }
};

export const selectAllLists = () => {
  return {
    type: 'SELECT_ALL_LISTS',
  }
};

export const deselectAllLists = () => {
  return {
    type: 'DESELECT_ALL_LISTS',
  }
};

export const fetchLists = dispatch => {
  const fetch_url = 'http://localhost:3000/ui/v3_access/accounts/1/lists';
  fetch(fetch_url).then((response) => {
    return response.json().then((json) => {
      dispatch(receiveLists(json.lists.map(parseList)));
    });
  });
};

