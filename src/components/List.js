import React, { PropTypes } from 'react';
import * as Actions from '../actions'

const List = ({ name, key, list_id, selected, store, handleClick }) => {
  const { dispatch } = store;
  return (
  <div onClick={() => handleClick(list_id)}>
        <input type="checkbox" class="Form-checkbox"/>
        <span> Name: {name} | Selected: {String(selected)}</span> </div>
  )
}

export default List;
