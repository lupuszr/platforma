import Immutable from 'immutable';

import * as actionTypes from '../constants/categoryConstants';

export const $$initialState = Immutable.fromJS({
  mainCategories:Immutable.List(), categories: Immutable.List(), management: {popupVisible: false} 
});

export default function categoryReducer($$state = $$initialState, action) {
  const { type } = action;

  switch (type) {
  	case actionTypes.CATEGORY_SHOW_POPUP: {
  		return $$state.setIn(['management','popupVisible'], action.categoryName)
  	}
  	case actionTypes.CATEGORY_HIDE_POPUP: {
  		return $$state.setIn(['management','popupVisible'], false)
  	}
    default: {
      return $$state;
    }
  }
}
