import viewShopReducer from './viewShopReducer';
import { $$initialState as $$viewShopState } from './viewShopReducer';

export default {
  $$shopStore: viewShopReducer,
};

export const initalStates = {
  $$viewShopState,
};
