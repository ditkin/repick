import React, { PropTypes } from 'react';
import List from './List'


const ListBox = ({ lists, store, handleClick }) => (
  <div>
    {lists.map((list) => 
      <List name={ list.name }
      key={ list.sequence_id }
      list_id={ list.list_id }
      selected={ list.selected }
      store={ store }
      handleClick={ handleClick } />
    )}
  </div>
)

ListBox.propTypes = {
  lists: PropTypes.array.isRequired
}

export default ListBox