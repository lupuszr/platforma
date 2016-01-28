import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import promiseMiddleware from 'lib/middlewares/promiseMiddleware'

import reducers from '../reducers';
import { initalStates } from '../reducers';

export default props => {

  const { countries, languages, currencies, mainCategories } = props;
  const { $$shopState } = initalStates;

  // Redux expects to initialize the store using an Object, not an Immutable.Map
  const initialState = {
    $$shopStore: $$shopState.merge({countries, languages, currencies, mainCategories}), 
  };

  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(promiseMiddleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialState);

  return store;
};
