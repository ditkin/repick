import React, { PropTypes } from 'react';
import List from './List'

const ListBox = ({ lists, store, handleClick }) => (
  <div>
    {lists.map((list) => 
      <List key={ list.sequence_id }
      handleClick={ handleClick }
      list_id={ list.list_id }
      name={ list.name }
      selected={ list.selected }
      store={ store } />
    )}
  </div>
)

export default ListBox