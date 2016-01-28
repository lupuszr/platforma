import shopReducer from './shopReducer';
import { $$initialState as $$shopState } from './shopReducer';

export default {
  $$shopStore: shopReducer,
};

export const initalStates = {
  $$shopState,
};
