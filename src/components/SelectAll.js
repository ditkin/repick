import React from 'react';

const SelectAll = ({ onClick, selected }) => {
  debugger;
  return (
    <div id="select-all" className="list" onClick={onClick}>
      <input type="checkbox" className="Form-checkbox" checked={selected}/>
      <label className="u-marginRight">Select All</label>
    </div>
  );
}
export default SelectAll;
