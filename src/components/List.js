import React, { PropTypes } from 'react';
import * as Actions from '../actions'

const List = ({ name, key, list_id, selected, store, handleClick }) => {
  const { dispatch } = store;
  //handleClick = handleClick.bind(this, list_id)
  return (
  <div onClick={() => handleClick(list_id)}>
        <input type="checkbox" class="Form-checkbox"/>
        <span> {name} | {key} | selected: {selected}</span> </div>
  )
}

List.contextTypes = {
  store: PropTypes.object
}
export default List;
