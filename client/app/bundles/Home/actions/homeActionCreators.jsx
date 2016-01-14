import request 			from 'axios'
import * as actionTypes from '../constants/homeConstants';

export function searchProduct(content) {
  return {
    type: actionTypes.HOME_SEARCH_PRODUCT,
    promise: request.get("/findarticle?content=" + content)
  };
}

export function clearResults() {
  return {
    type: actionTypes.HOME_CLEAR_RESULTS
  }
}

export function hideResults(){
	return {
    type: actionTypes.HOME_HIDE_RESULTS
	}
}
