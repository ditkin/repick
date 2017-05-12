const changeMatchedList = (list, id, selected) => {
  return Object.assign(list, {
    selected: list.sequence_id === id ? selected : list.selected
  });
};

const changeList = (list, selected) => {
  return Object.assign(list, { selected });
};

const filterSearchedList = (list, value) => {
  return Object.assign(list, { searched: list.name.includes(value) });
}

export const searchLists = (lists, value) => {
  return lists.map((list) => {
    return filterSearchedList(list, value);
  });
}

export const selectList = (lists, id) => {
  return lists.map(list => {
    return changeMatchedList(list, id, true);
  });
}

export const deselectList = (lists, id) => {
  return lists.map(list => {
    return changeMatchedList(list, id, false);
  });
}

export const selectAllLists = (lists) => {
  return lists.map(list => {
    return changeList(list, true);
  });
}

export const deselectAllLists = (lists) => {
  return lists.map(list => {
    return changeList(list, false);
  });
}

const compare = (a, b) => ( (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 1 )

export const sortLists = (lists) => {
  return lists.sort(compare)
}

export const allListsSelected = (lists) => (
  lists.reduce((acc, list) => ( acc && list.selected ), true)
)