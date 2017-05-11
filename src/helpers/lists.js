const changeMatchedList = (list, id, selected) => {
    return Object.assign(list, { selected: list.id === id ? selected : list.selected });
};

const changeList = (list, selected) => {
    return Object.assign(list, { selected });
};

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
    return lists.map(list => { return changeList(list, true); });
}

export const deselectAllLists = (lists) => {
    return lists.map(list => { return changeList(list, false); });
}