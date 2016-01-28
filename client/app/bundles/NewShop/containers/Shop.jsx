import React, { PropTypes } from 'react';
import ShopWidget from '../components/ShopWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as shopActionCreators from '../actions/shopActionCreators';

function select(state) {
  return { 
    $$shopStore: state.$$shopStore 
  };
}

class Shop extends React.Component {
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
      <ShopWidget {...{$$shopStore, actions}} />
    );
  }
}

export default connect(select)(Shop);
