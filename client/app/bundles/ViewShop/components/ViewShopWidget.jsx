import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import Banner from './Banner'
import Tabs from './Tabs'
import TabSwitch from './TabSwitch'

export default class ViewShopWidget extends React.Component {
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
      <div className="container-fluid" >
        <Banner {...{$$shopStore}}></Banner>
        <Tabs {...{...this.props.actions}}></Tabs>
        <TabSwitch {...{$$shopStore,...this.props.actions}}></TabSwitch>
      </div>
    );
  }
}
