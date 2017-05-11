import React, { Component } from 'react'
import ContactItem from './ContactItem'

class ContactRow extends Component {
    render() {
        let contactTableItems = this.buildTableItems()
        return (
            <tr className={this.getRowClass()} tabIndex="0" onBlur={ this.saveContact.bind(this) }>
                <td>
                    <input type="checkbox" className="Form-checkbox" id={this.props.id} data-qe-id="Table-CHECKBOX-ID"></input>
                    <label htmlFor={this.props.id} className="u-paddingFlush u-block"></label>
                </td>
                {contactTableItems}
            </tr>
        )
    }

    buildTableItems() {
        return this.props.contactAttributes.map( (attr) => {
                return (<ContactItem
                    attribute={attr}
                    value={this.props[attr]}
                    onClick={this.toggleRowActive.bind(this)}
                    editable={this.isEditable(attr)}
                    active={this.props.active}
                    ref={attr}
                    key={attr}/>)
            }
        )
    }

    isEditable(attr) {
        return attr === 'create_source' ? false : true
    }

    toggleRowActive(attribute) {
      this.props.setActiveRow(this.props.id)
    }

    getRowClass() {
        return this.props.active ? 'is-selected' : ''
    }

    saveContact() {
        let userInput = {}
        for (var attr in this.refs) { 
            if (Object.prototype.hasOwnProperty.call(this.refs, attr)) {
                userInput[attr] = this.refs[attr].refs.input.innerText
            }
        }

        if (this.userEditedContact(userInput)) {
            this.getContact(this.props.contact_id)
                .then( (contact_json) => {
                    let emailAddressObj = contact_json.email_address
                    emailAddressObj.address = userInput.email_address
                    userInput.email_address = emailAddressObj
                    Object.assign(contact_json, userInput)
                    this.postContact(contact_json)
            })
        }

    }

    getContact() {
        return fetch(`http://localhost:3000/contacts-service/v3/accounts/${this.props.accountId}/contacts/${this.props.id}`)
            .then( (response) => {return response.json()} )
    }

    postContact(contactData) {
        fetch(`http://localhost:3000/contacts-service/v3/accounts/${this.props.accountId}/contacts/${this.props.id}`, {
            method: 'PUT',
            body: JSON.stringify(contactData)
        })
    }

    userEditedContact(userInput) {
        for (var attr in userInput) {
            if (userInput[attr] !== this.props[attr]) {
                return true
            }
        }
        return false
    }
}

export default ContactRow;
