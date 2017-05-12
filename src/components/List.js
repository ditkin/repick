import React, { PropTypes } from 'react';
import * as Actions from '../actions'

const List = ({
  favorite,
  onClick,
  key,
  name,
  selected,
}) => {
  return (
    <div onClick={onClick}>
      <input type="checkbox" class="Form-checkbox" checked={selected}/>
      <span>
        Name: {name} |
        Selected: {String(selected)} |
        Favorite: {String(favorite)}
      </span>
    </div>
  )
}

export default List;
