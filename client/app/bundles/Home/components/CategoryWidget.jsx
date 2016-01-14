import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import _ from 'lodash';
import Bar from './categoryPanel/Bar'
import Popup from './categoryPanel/Popup'

export default class CategoryWidget extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    $$categoryStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  }

  render() {
    const $$categoryStore = this.props.$$categoryStore;
    return (
      <div className="container-fluid" >
        <Bar {...{$$categoryStore,...this.props.actions}}></Bar>
        <Popup {...{$$categoryStore,...this.props.actions}}></Popup>
      </div>
    );
  }
}
