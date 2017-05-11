import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.created_at}</td>
            </tr>
        );
    }
}

export default List;
