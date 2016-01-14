import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/categoryStore';
import Category from '../containers/Category';

const CategoryApp = props => {
  const store = createStore(props);
  console.log(store)
  const reactComponent = (
    <Provider store={store}>
      <Category />
    </Provider>
  );
  return reactComponent;
};

export default CategoryApp;
