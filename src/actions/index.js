export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';

const receiveContacts = (json) =>  {
    return { type: RECEIVE_CONTACTS, contacts: json.contacts, count: json.contacts_count }
};

export const fetchContacts = accountId => dispatch => {
    let fetch_url = `http://localhost:3000/contacts-service/v3/accounts/${accountId}/contacts?limit=15&include_count=true`;
    return dispatch(function (dispatch) {
            fetch(fetch_url)
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    dispatch(receiveContacts(json));
                });
        }
    )
};
