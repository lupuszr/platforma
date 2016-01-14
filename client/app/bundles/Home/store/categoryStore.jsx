import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

// This provides an example of logging redux actions to the console.
// You'd want to disable this for production.

import loggerMiddleware from 'lib/middlewares/loggerMiddleware';
import promiseMiddleware from 'lib/middlewares/promiseMiddleware'

import reducers from '../reducers';
import { initalStates } from '../reducers';

export default props => {

  const { mainCategories, categories } = props;
  const { $$categoryState } = initalStates;

  // Redux expects to initialize the store using an Object, not an Immutable.Map
  const initialState = {
    $$categoryStore: $$categoryState.merge({ mainCategories, categories})
  };
  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(promiseMiddleware, loggerMiddleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialState);

  return store;
};
