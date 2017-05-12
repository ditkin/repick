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

const compare = (a, b) => {
  const a_name = a.name.toLowerCase();
  const b_name = b.name.toLowerCase();
  const a_fav = a.favorite;
  const b_fav = b.favorite;

  if (a_fav && !b_fav) {
    return -1;
  } else if (b_fav &! a_fav) {
    return 1;
  } else if (a_name < b_name) {
    return -1;
  } else {
    return 1;
  }
}

export const sortLists = (lists) => {
  return lists.sort(compare)
}

export const allListsSelected = (lists) => (
  lists.reduce((acc, list) => ( acc && list.selected ), true)
)

export const filterEmptyLists = (lists) => (
  lists.filter((list) => list.membership_count > 0)
)

export const getSelectedListCount = (lists) => (
  lists.reduce((acc, list) => {
    const count = list.selected ? 1 : 0;
    return acc + count;
  }, 0)
)

export const getSelectedRecipientCount = (lists) => (
  lists.reduce((acc, list) => {
    const count = list.selected ? list.membership_count : 0;
    return acc + count;
  }, 0)
)
