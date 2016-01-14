import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import _ from 'lodash';
import SearchPanel from './searchPanel/Panel'

export default class HomeWidget extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    $$homeStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  }

  render() {
    const $$homeStore = this.props.$$homeStore;
    const {searchProduct,clearResults} = this.props.actions;
    return (
      <div className="container-fluid homeWidget padding-xlarge" >
        <SearchPanel {...{$$homeStore,...this.props.actions}}></SearchPanel>
      </div>
    );
  }
}
