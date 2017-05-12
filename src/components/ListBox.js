import React, { PropTypes } from 'react'
import * as Helpers from '../helpers/lists'
import List from './List'

const ListBox = ({ lists, store, handleClickList, isFetching }) => (
  <div id="list-box">
    <div id="spinner">
      <div className={`LoadingIndicator ${isFetching ? '' : 'u-hide'}`}>
        <object data="https://static.ctctcdn.com/ui/images1/loading-indicator.svg" type="image/svg+xml"></object>
        <p className="LoadingIndicator-message">Loading...</p>
      </div>
    </div>
    <div>
      <form className={`Form ${isFetching ? 'u-hide' : ''}`}>
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

export default ListBox
