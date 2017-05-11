import { Component } from 'react';
import { connect } from 'react-redux'
import * as Actions from '../actions'
import ListBox from '../components/ListBox'

class ListContainer extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate();
    });

    Actions.fetchLists(this.props.store.dispatch);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <ListBox
        lists={

        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectList: (list_id) => {
      dispatch(Actions.selectList(list_id))
    },
    deselectList: (list_id) => {
      dispatch(Actions.deselectList(list_id))
    },
  }
};

// ListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ListContainer)

export default ListContainer
