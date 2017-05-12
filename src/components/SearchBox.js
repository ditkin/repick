import React from 'react';

const SearchBox = ({handleSearch}) => (
  <div className="Form Search">
    <div className="Grid u-clearfix u-marginBottomFlush">
      <div className="Grid-item u-sizeShrinkWrapRight u-marginLeftHalf">
        <button type="submit" className="Button Button--icon">
          <i className="Icon--magnifyGlass"></i>
        </button>
      </div>
      <div className="Grid-item u-sizeFill">
        <div className="Form-clearField">
          <input className="Search-field js-clear-field" placeholder="Search" type="search" onChange={handleSearch}/>
        </div>
      </div>
    </div>
  </div>
)

export default SearchBox;
