import React, { PropTypes } from 'react';
import ViewShopWidget from '../components/ViewShopWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as shopActionCreators from '../actions/viewShopActionCreators';

function select(state) {
  return { 
    $$shopStore: state.$$shopStore 
  };
}

class ViewShop extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,

    $$shopStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  }

  render() {
    const { dispatch, $$shopStore } = this.props;
    const actions = bindActionCreators(shopActionCreators, dispatch);

    return (
      <ViewShopWidget {...{$$shopStore, actions}} />
    );
  }
}

export default connect(select)(ViewShop);
