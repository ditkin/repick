import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import * as Actions from '../actions'
import ListBox from '../components/ListBox'
import SearchBox from '../components/SearchBox'
import * as Helpers from '../helpers/lists'

class App extends Component {
  static PropTypes = {
    lists: PropTypes.array.isRequired,
    isFetching: PropTypes.bool,
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

  handleClickSelectAll = () => {
    if (Helpers.allListsSelected(this.props.lists)) {
      this.props.dispatch(Actions.deselectAllLists());
    } else {
      this.props.dispatch(Actions.selectAllLists());
    } 
  }

  render() {
    const { isFetching, lists } = this.props;
    const sortedLists = Helpers.sortLists(lists)
    const allListsSelected = Helpers.allListsSelected(lists)
    console.log('Lists Sel: ' + allListsSelected)
    return (
      <div className="app">
        <SearchBox handleSearch={this.handleSearch}/>
        <ListBox
          allListsSelected={allListsSelected}
          handleClickList={this.handleClickList}
          handleClickSelectAll={this.handleClickSelectAll}
          isFetching={isFetching}
          lists={sortedLists}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { lists, isFetching } = state;

  return {
    lists,
    isFetching,
  };
};

App.contextTypes = {
  store: PropTypes.object
}
export default connect(mapStateToProps)(App);
