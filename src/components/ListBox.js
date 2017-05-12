import React, { PropTypes } from 'react';
import List from './List'

const ListBox = ({ lists, store, handleClickList }) => (
  <div id="list-box">
    <form className="Form">
      {lists.map((list) =>
        <List
          favorite={ list.favorite }
          key={ list.sequence_id }
          name={ list.name }
          onClick={() => handleClickList(list.sequence_id, list.selected)}
          searched={ list.searched }
          selected={ list.selected }
          sequence_id={ list.sequence_id }
        />
      )}
    </form>
  </div>
)

export default ListBox
