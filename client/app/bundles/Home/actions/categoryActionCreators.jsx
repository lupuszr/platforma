import * as actionTypes from '../constants/categoryConstants';

export function showPopup(categoryName){
  return {
    type: actionTypes.CATEGORY_SHOW_POPUP,
    categoryName
  }
}

export function hidePopup(){
  return {
    type: actionTypes.CATEGORY_HIDE_POPUP
  }
}
