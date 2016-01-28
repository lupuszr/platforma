import Immutable from 'immutable';

import * as actionTypes from '../constants/viewShopConstants';

export const $$initialState = Immutable.fromJS({
  shop: Immutable.Map(), 
  articles: Immutable.List(),
  management: Immutable.Map({activeTab:'ARTICLES_TAB'})

});


export default function shopReducer($$state = $$initialState, action) {
  const { type } = action;

  switch (type) {
    case actionTypes.SHOP_VIEW_SET_ACTIVE_TAB: {
      return $$state.setIn(['management','activeTab'], tab => action.tab)
    }
    default: {
      return $$state;
    }
  }
}
