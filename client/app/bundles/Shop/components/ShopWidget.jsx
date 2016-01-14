import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import PanelSwitch from './PanelSwitch'
import Paginator  from './Paginator'

export default class ShopWidget extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    $$shopStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  }

  render() {
    const $$shopStore = this.props.$$shopStore;
    return (
      <div className="container-fluid padding-xlarge" >
        <Paginator {...{$$shopStore,...this.props.actions}}></Paginator>
        <PanelSwitch {...{$$shopStore,...this.props.actions}}></PanelSwitch>
      </div>
    );
  }
}
