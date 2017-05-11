const RECEIVE_LISTS = 'RECEIVE_LISTS';

const receiveLists = (lists) =>  {
    return { type: RECEIVE_LISTS, lists };
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

export const fetchLists = dispatch => {
    const fetch_url = 'http://localhost:3000/ui/v3_access/accounts/1/lists';
    return dispatch((dispatch) => {
        fetch(fetch_url)
            .then((response) => {
                return response.json().lists.map(parseList)
            })
            .then((lists) => {
                dispatch(receiveLists(lists));
            });
    });
};
