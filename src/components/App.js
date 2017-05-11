import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer';

const App = ({ store }) => (
  <div>
    <ListContainer store={store} />
  </div>
)

export default App;
