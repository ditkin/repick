import React, { Component } from 'react';
import ListBox from './ListBox';
import * as Actions from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    props.store.subscribe(this.render.bind(this));
    Actions.fetchLists(props.store.dispatch);
  }

  render() {
    const state = this.props.store.getState();
    console.log(state);
    const lists = state.lists || [];
    return (
      <div className="App u-margin">
        <div className="Grid Grid--gutter">
          <div className="Grid-item u-size3of4">
            <ListBox lists={ state }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
