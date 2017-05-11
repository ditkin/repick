import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import List from './List';

class Lists extends Component {

    constructor(){
        super();
        this.state = {
            lists: [],
            count: 0
        };
    };

    componentDidMount() {
        let fetch_url = `http://localhost:3000/contacts-service/v3/accounts/${this.props.params.accountId}/lists?limit=25&include_count=true`;

        fetch(fetch_url)
            .then( (response) => {
                return response.json() })
            .then( (json) => {
                this.setState({lists: json.lists, count: json.lists_count});
            });
    };

    _getLists() {
        return this.state.lists.map((list) => {
            return (<List
                id={list.list_id}
                name={list.name}
                created_at={list.created_at}
                key={list.list_id} />);
        });
    }

    render() {

        let lists = this._getLists();

        return (
            <div>
                <h1 className="Heading--section">Lists ({this.state.count})</h1>
                <Table hover className="Table Table--cellBorders">
                <thead className="Table-head">
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                </tr>
                </thead>
                <tbody>
                {lists}
                </tbody>
            </Table>
            </div>
        );
    }
}

export default Lists;
