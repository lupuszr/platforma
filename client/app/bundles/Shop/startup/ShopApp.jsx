import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/shopStore';
import Shop from '../containers/Shop';

const ShopApp = props => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <Shop />
    </Provider>
  );
  return reactComponent;
};

export default ShopApp;
