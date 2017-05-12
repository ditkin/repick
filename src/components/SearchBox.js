import React from 'react';

const SearchBox = ({handleSearch}) => (
  <div id="search-box" className="search_field js-search-collection-items Form-inputGroup Form-inputGroup--colored u-marginBottomFlush">
    <span className="Form-inputAddOn"><i className="Icon--magnifyGlass"></i></span>
    <input type="text" id="search_input" className="js-track-search" placeholder="Search" onChange={handleSearch}/>
  </div>
)

export default SearchBox;
