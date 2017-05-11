import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ContactRow from './ContactRow';

class ContactList extends Component {

    constructor(){
        super();
        this.state = {
            activeRow: null
        };
    };

    setActiveRow(contact_id) {
        this.setState({activeRow: contact_id})
    }

    _getContacts(contacts) {
        let contactTableAttributes = ['first_name', 'last_name', 'email_address', 'create_source']

        return contacts.map((contact) => {
            return (<ContactRow
                id={contact.contact_id}
                first_name={contact.first_name}
                last_name={contact.last_name}
                email_address={contact.email_address.address}
                create_source={contact.create_source || 'Added by you'}
                key={contact.contact_id}
                contactAttributes={contactTableAttributes}
                active={this.state.activeRow === contact.contact_id}
                accountId={this.props.accountId}
                setActiveRow={this.setActiveRow.bind(this)}/>);
        });
    }

    render() {
        const { contacts } = this.props;
        let contactRows = this._getContacts(contacts);

        return (
                <Table hover className="Table Table--cellBorders">
                    <thead className="Table-head">
                    <tr>
                        <th className="u-tableCellCollapse">
                            <input type="checkbox" className="Form-checkbox" id="checkbox1"></input>
                            <label htmlFor="checkbox1" className="u-paddingFlush u-block"></label>
                        </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Source</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contactRows}
                    </tbody>
                </Table>
        );
    }
}

export default ContactList;
