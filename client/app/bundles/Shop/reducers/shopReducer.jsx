import Immutable from 'immutable';

import * as actionTypes from '../constants/shopConstants';
export const MAX_ARTICLE_COUNT = 8;

export const $$initialState = Immutable.fromJS({
  languages: Immutable.List(), 
  countries: Immutable.List(), 
  currencies:Immutable.List(), 
  mainCategories: Immutable.List(),
  categories: Immutable.List(), //should optimize
  subCategories: Immutable.List(), //should optimize
  shops:Immutable.List(), 
  management: {resultWindow: false, nameAvailable: null, activePanel:"CUSTOMIZE_PANEL", stockMode: "LIST_MODE"},
  shop: Immutable.fromJS({language: null, name: null, currency: null, country: null, articles: []}),
  article: Immutable.fromJS({name: null, description: null, price: null, mainCategory: null, category: null, subCategory: null})
});

function addArticle($$state, $$article){
  if ($$state.getIn(['shop','articles']).size < MAX_ARTICLE_COUNT){
      return $$state.updateIn(['shop','articles'], list => list.push($$article)) 
  }else{
    return $$state;
  }
}

export default function shopReducer($$state = $$initialState, action) {
  const { type } = action;

  switch (type) {
    case actionTypes.NEW_SHOP_SET_NAME: {
      return $$state.setIn(['shop', 'name'], action.shopName)
    }
    case actionTypes.NEW_SHOP_SET_CURRENCY: {
      return $$state.setIn(['shop', 'currency'], action.shopCurrency)
    }
    case actionTypes.NEW_SHOP_SET_COUNTRY: {
      return $$state.setIn(['shop', 'country'], action.shopCountry)
    }
    case actionTypes.NEW_SHOP_SET_LANGUAGE: {
      return $$state.setIn(['shop', 'language'], action.shopLanguage)
    }
    case actionTypes.NEW_SHOP_ADD_ARTICLE: {
      console.log(action.$$article)
      console.log(action.$$article.toJS())
      return addArticle($$state, action.$$article)
    }
    case actionTypes.NEW_SHOP_STOCK_ADD_MODE: {
      return $$state.setIn(['management', 'stockMode'], "ADD_MODE")
    }
    case actionTypes.NEW_SHOP_STOCK_LIST_MODE: {
      return $$state.setIn(['management', 'stockMode'], "LIST_MODE")
    }
    case actionTypes.NEW_SHOP_NAME_AVAILABLE: {
      return $$state.setIn(['management', 'nameAvailable'], action.res.data)
    }
    case actionTypes.NEW_SHOP_SET_CURRENT_PANEL: {
      return $$state.setIn(['management', 'activePanel'], action.activePanel) 
    }
    case actionTypes.NEW_SHOP_FETCH_CATEGORIES: {
      return $$state.set('categories', Immutable.fromJS(action.res.data)) 
    }
    case actionTypes.NEW_SHOP_FETCH_SUB_CATEGORIES: {
      return $$state.set('subCategories', Immutable.fromJS(action.res.data)) 
    }
    case actionTypes.NEW_SHOP_ARTICLE_SET_NAME: {
      return $$state.setIn(['article','name'], action.name)
    }
    case actionTypes.NEW_SHOP_ARTICLE_SET_DESCRIPTION: {
      return $$state.setIn(['article','description'], action.description)
    }
    case actionTypes.NEW_SHOP_ARTICLE_SET_PRICE: {
      return $$state.setIn(['article','price'], action.price)
    }
    case actionTypes.NEW_SHOP_ARTICLE_SET_MAIN_CATEGORY: {
      return $$state.setIn(['article','mainCategory'], action.mainCategory)
    }
    case actionTypes.NEW_SHOP_ARTICLE_SET_CATEGORY: {
      return $$state.setIn(['article','category'], action.category)
    }
    case actionTypes.NEW_SHOP_ARTICLE_SET_SUB_CATEGORY: {
      return $$state.setIn(['article','subCategory'], action.subCategory)
    }
    case actionTypes.NEW_SHOP_ARTICLE_CLEAN_ALL: {
      return $$state.set('article', $$initialState.get('article'))
    }
    default: {
      return $$state;
    }
  }
}
