import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/homeStore';
import Home from '../containers/Home';

const HomeApp = props => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <Home />
    </Provider>
  );
  return reactComponent;
};

export default HomeApp;
