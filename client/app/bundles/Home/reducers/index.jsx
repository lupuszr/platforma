import homeReducer from './homeReducer';
import categoryReducer from './categoryReducer';
import { $$initialState as $$homeState } from './homeReducer';
import { $$initialState as $$categoryState } from './categoryReducer';

export default {
  $$homeStore: homeReducer,
  $$categoryStore: categoryReducer,
};

export const initalStates = {
  $$homeState,
  $$categoryState,
};
