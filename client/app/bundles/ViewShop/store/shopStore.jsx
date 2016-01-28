import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import promiseMiddleware from 'lib/middlewares/promiseMiddleware'

import reducers from '../reducers';
import { initalStates } from '../reducers';

export default props => {

  const { shop, articles } = props;
  const { $$viewShopState } = initalStates;

  // Redux expects to initialize the store using an Object, not an Immutable.Map
  const initialState = {
    $$shopStore: $$viewShopState.merge({shop, articles}), 
  };

  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(promiseMiddleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialState);

  return store;
};
