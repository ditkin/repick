import React, { PropTypes } from 'react';
import List from './List'

const ListBox = ({ lists, store, handleClickList }) => (
  <div>
    {lists.map((list) => 
      <List
      key={ list.sequence_id }
      favorite={ list.favorite }
      name={ list.name }
      onClick={() => handleClickList(list.sequence_id, list.selected)}
      selected={ list.selected }
      />
    )}
  </div>
)

export default ListBox