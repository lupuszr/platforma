import React, { PropTypes } from 'react';
import CategoryWidget from '../components/CategoryWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as categoryActionCreators from '../actions/categoryActionCreators';

function select(state) {
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { 
    $$categoryStore: state.$$categoryStore 
  };
}

class Category extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,

    // This corresponds to the value used in function select above.
    $$categoryStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  }

  render() {
    const { dispatch, $$categoryStore } = this.props;
    const actions = bindActionCreators(categoryActionCreators, dispatch);

    // This uses the ES2015 spread operator to pass properties as it is more DRY
    // This is equivalent to:
    // <HelloWorldWidget $$helloWorldStore={$$helloWorldStore} actions={actions} />
    return (
      <CategoryWidget {...{$$categoryStore, actions}} />
    );
  }
}

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/rackt/react-redux/blob/master/docs/api.md#examples
export default connect(select)(Category);
