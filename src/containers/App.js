import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import * as Actions from '../actions'
import ListBox from '../components/ListBox'
import SearchBox from '../components/SearchBox'

class App extends Component {
  static PropTypes = {
    lists: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(Actions.fetchLists());
  }

  handleClickList = (seq_id, selected) => {
    if (selected) {
      this.props.dispatch(Actions.deselectList(seq_id));
    } else {
      this.props.dispatch(Actions.selectList(seq_id));
    }
  }

  handleSearch = (e) => {
    const search_val = e.target.value;
    this.props.dispatch(Actions.searchLists(search_val));
  }

  render() {
    const { lists } = this.props;
    const { store } = this.context;
    return (
      <div className="app">
        <SearchBox handleSearch={this.handleSearch}/>
        <ListBox
          handleClickList={this.handleClickList}
          lists={lists}
          store={store}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { lists } = state;

  return {
    lists,
  };
};

App.contextTypes = {
  store: PropTypes.object
}
export default connect(mapStateToProps)(App);
