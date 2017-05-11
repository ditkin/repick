import React, { Component, PropTypes } from 'react';
import ContactTable from './ContactTable';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';

class Contacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        count: PropTypes.number.isRequired
    };

    componentDidMount() {
        const { fetchContactsDispatch } = this.props;
        const { accountId } = this.props.params;
        fetchContactsDispatch(accountId);
    };

    render() {
        const { contacts, count } = this.props;
        const { accountId } = this.props.params;

        return (
            <div>
                <h1 className="Heading--section">Contacts ({count})</h1>
                <div className="DataToolbar" data-qe-id="DataToolbar-ID2">
                    <ul className="DataToolbar-group u-marginFlush">
                        <li className="u-marginRight">
                            <div className="Dropdown js-dropdown-select" data-selected="List" id="dd01" data-qe-id="Dropdown-ID3">
                                <button type="button" className="Button Button--link Button--tight" data-qe-id="Dropdown-ID3-toggle">
                                    Add
                                    <span className="Button-caret"></span>
                                </button>
                                <ul className="Menu">

                                </ul>
                            </div>
                        </li>
                        <li className="u-marginRight">
                            <div className="Dropdown js-dropdown-select" data-selected="Five" id="dd02" data-qe-id="Dropdown-ID4">
                                <button type="button" className="Button Button--link Button--tight" data-qe-id="Dropdown-ID4-toggle">
                                    Delete
                                    <span className="Button-caret"></span>
                                </button>
                                <ul className="Menu">

                                </ul>
                            </div>
                        </li>
                        <li className="u-marginRight">
                            <a href="#">Export</a>
                        </li>
                        <li className="u-marginRight">
                            <a href="#">QuickSend</a>
                        </li>
                    </ul>
                    <ul className="DataToolbar-group u-marginFlush u-floatRight">
                        <li className="u-marginRight">
                            <div className="Dropdown js-dropdown-select" data-selected="List" id="dd022" data-qe-id="Dropdown-ID3">
                                <button type="button" className="Button Button--link Button--tight" data-qe-id="Dropdown-ID3-toggle">
                                    Columns
                                    <span className="Button-caret"></span>
                                </button>
                                <ul className="Menu">

                                </ul>
                            </div>
                        </li>
                    </ul>

                </div>
                <ContactTable contacts={contacts} accountId={accountId} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contactsReducer.contacts,
        count: state.contactsReducer.count || 0
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchContactsDispatch: (accountId) => {
            dispatch(fetchContacts(accountId));
        },
    }
};


Contacts = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default Contacts;
