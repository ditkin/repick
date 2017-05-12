import React, { PropTypes } from 'react';

const List = ({ favorite, sequence_id, name, onClick, selected, searched, membership_count }) => {
  const visibilityClass = searched || selected ? '' : 'u-hide';
  const favoriteClass = favorite ? '' : 'u-hide';

  return (
    <div onClick={onClick} className={`list ${visibilityClass}`}>
      <input type="checkbox" className="Form-checkbox" checked={selected}/>
      <label className="u-marginRight">
        {name} ({membership_count})
      </label>
      <i className={`Icon--star star-orange ${favoriteClass}`}/>
    </div>
  )
}

export default List;
