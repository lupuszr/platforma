import API_URI      from 'lib/api'
import request      from 'axios'
import * as actionTypes from '../constants/viewShopConstants';

// export function addImage(image){
//   return {
//     type: actionTypes.NEW_SHOP_ADD_IMAGE,
//     image
//   }
// }

/**management**/
  export function setActiveTab(tab){
    return {
      type: actionTypes.SHOP_VIEW_SET_ACTIVE_TAB,
      tab
    }
  }

/**panels**/
/*about*/
/*articles*/
/*contact*/
/*review*/

