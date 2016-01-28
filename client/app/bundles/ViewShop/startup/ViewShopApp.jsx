import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/shopStore';
import ViewShop from '../containers/ViewShop';

const ViewShopApp = props => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <ViewShop />
    </Provider>
  );
  return reactComponent;
};

export default ViewShopApp;
