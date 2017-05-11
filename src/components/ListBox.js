import React, { Component } from 'react';
import List from '../components/List';

class ListBox extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const lists = this.props.lists.map((list) => {
      return <List key={ list.sequence_id }/>
    });

    console.log('rendering listbox');

    console.log(lists);

    return (
      <div>
        <h1> ListBox Component </h1>
        <div>
          { lists }
        </div>
      </div>
    );
  }
}

export default ListBox;
