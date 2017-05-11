import React, { Component } from 'react';

class ContactItem extends Component {
    render() {
        return (
            <td is class={`${this.props.attribute} ${this.props.editable ? '' : 'notEditable'}`}
                data-editable={this.props.editable}
                contenteditable={this.props.editable}
                onClick={this.props.onClick}> 
                {this.buildElement()}
            </td>
        )
    }

    buildElement() {
        let elementStyle = {margin: '0px'}

        if (this.props.editable && this.props.active) {
            Object.assign(elementStyle, {backgroundColor: 'white'})
        }

        if (this.props.active) {
            return <p ref='input'className='u-border u-paddingHalf inputStyle' style={elementStyle}>{this.props.value}</p>
        } else {
            return <p ref='contact_info' style={elementStyle}>{this.props.value}</p>
        }
    }
}

export default ContactItem;
