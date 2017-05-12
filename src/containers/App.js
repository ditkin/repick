import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import * as Actions from '../actions'
import ListBox from '../components/ListBox'

class App extends Component {
  static PropTypes = {
    lists: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(Actions.fetchLists());
  }

  handleClick = list_id => {
    this.props.dispatch(Actions.selectList(list_id))
  }

  render() {
    const { lists } = this.props;
    const { store } = this.context;
    return (
      <ListBox lists={lists} store={store} handleClick={this.handleClick}/>
    )
  }
}

const mapStateToProps = (state) => {
  const { lists } = state

  return {
    lists,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     selectList: (list_id) => {
//       dispatch(Actions.selectList(list_id))
//     },
//     deselectList: (list_id) => {
//       dispatch(Actions.deselectList(list_id))
//     },
//     fetchLists: () => {
//       dispatch(Actions.fetchLists());
//     },
//   }
//};
App.contextTypes = {
  store: PropTypes.object
}
export default connect(mapStateToProps)(App);