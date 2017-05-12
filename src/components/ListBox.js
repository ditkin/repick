import React, { PropTypes } from 'react'
import * as Helpers from '../helpers/lists'
import List from './List'
import SelectAll from './SelectAll'

const ListBox = ({ allListsSelected, lists, handleClickList, handleClickSelectAll, isFetching, selectAllVisible }) => {
  const formVisibilityClass = isFetching ? 'u-hide' : ''
  const spinnerVisibilityClass = isFetching ? '' : 'u-hide'
  debugger;
  return (
    <div id="list-box">
      <div id="spinner" className={`${spinnerVisibilityClass}`}>
        <div className={"LoadingIndicator"}>
          <object data="https://static.ctctcdn.com/ui/images1/loading-indicator.svg" type="image/svg+xml"></object>
          <p className="LoadingIndicator-message">Loading...</p>
        </div>
      </div>
      <div>
        <form className={`Form ${formVisibilityClass}`}>
          <SelectAll
            onClick={handleClickSelectAll}
            selected={allListsSelected}
          />
          {lists.map((list) =>
            <List
              favorite={list.favorite}
              key={list.sequence_id}
              name={list.name}
              onClick={() => handleClickList(list.sequence_id, list.selected)}
              searched={list.searched}
              selected={list.selected}
              sequence_id={list.sequence_id}
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default ListBox
