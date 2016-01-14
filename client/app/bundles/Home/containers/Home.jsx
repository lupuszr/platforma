import React, { PropTypes } from 'react';
import HomeWidget from '../components/HomeWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as homeActionCreators from '../actions/homeActionCreators';

function select(state) {
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { 
    $$homeStore: state.$$homeStore 
  };
}

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,

    // This corresponds to the value used in function select above.
    $$homeStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  }

  render() {
    const { dispatch, $$homeStore } = this.props;
    const actions = bindActionCreators(homeActionCreators, dispatch);

    // This uses the ES2015 spread operator to pass properties as it is more DRY
    // This is equivalent to:
    // <HelloWorldWidget $$helloWorldStore={$$helloWorldStore} actions={actions} />
    return (
      <HomeWidget {...{$$homeStore, actions}} />
    );
  }
}

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/rackt/react-redux/blob/master/docs/api.md#examples
export default connect(select)(Home);
