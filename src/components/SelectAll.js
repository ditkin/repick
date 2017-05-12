import React from 'react';

const SelectAll = ({ onClick, selected }) => {
  return (
    <div id="select-all" className="list" onClick={onClick}>
      <input type="checkbox" className="Form-checkbox" checked={selected}/>
      <label className="u-marginRight">Select All</label>
    </div>
  );
}
export default SelectAll;
