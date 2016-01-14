import Immutable from 'immutable';

import * as actionTypes from '../constants/homeConstants';

export const $$initialState = Immutable.fromJS({
  articles:Immutable.List(), management: {resultWindow: false} 
});

function searchProduct($$state, data){
  if(!!data.length){
    return $$state.set('articles', Immutable.fromJS(data)).updateIn(['management','resultWindow'],val => true);
  }else{
    return $$state;
  }
}

export default function homeReducer($$state = $$initialState, action) {
  const { type } = action;

  switch (type) {
    case actionTypes.HOME_SEARCH_PRODUCT: {
      return searchProduct($$state,action.res.data)
    }
    case actionTypes.HOME_CLEAR_RESULTS: {
      return $$state.set('articles', Immutable.List()).updateIn(['management','resultWindow'],val => false) 
    }
    default: {
      return $$state;
    }
  }
}
