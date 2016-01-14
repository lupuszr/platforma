import API_URI      from 'lib/api'
import request 			from 'axios'
import * as actionTypes from '../constants/shopConstants';

export function uploadImages(images){
  var data = new FormData();
  images.each( (img, index) => {
    data.append('file' + index, img);
  })

  return {
    type: actionTypes.NEW_SHOP_UPLOAD_IMAGES,
    promise: request.post('/shop/article/upload_images',data,  {headers: {
    'X-Transaction': 'POST Image',
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }})
  }
}

export function cleanArticle(){
  return {
    type: actionTypes.NEW_SHOP_ARTICLE_CLEAN_ALL
  }
}

export function articleSetName(name){
  return {
    type: actionTypes.NEW_SHOP_ARTICLE_SET_NAME,
    name
  }
}

export function articleSetDescription(description){
  return {
    type: actionTypes.NEW_SHOP_ARTICLE_SET_DESCRIPTION,
    description
  }
}

export function articleSetPrice(price){
  return {
    type: actionTypes.NEW_SHOP_ARTICLE_SET_PRICE,
    price
  }
}

export function articleSetMainCategory(mainCategory){
  return {
    type: actionTypes.NEW_SHOP_ARTICLE_SET_MAIN_CATEGORY,
    mainCategory
  }
}

export function articleSetCategory(category){
  return {
    type: actionTypes.NEW_SHOP_ARTICLE_SET_CATEGORY,
    category
  }
}

export function articleSetSubCategory(subCategory){
  return {
    type: actionTypes.NEW_SHOP_ARTICLE_SET_SUB_CATEGORY,
    subCategory
  }
}
export function fetchCategories(id){
  return {
    type: actionTypes.NEW_SHOP_FETCH_CATEGORIES,
    promise: request.get("/shop/article/get_categories?main_category_id=" + id)
  }
}

export function fetchSubCategories(id){
  return {
    type: actionTypes.NEW_SHOP_FETCH_SUB_CATEGORIES,
    promise: request.get("/shop/article/get_sub_categories?category_id=" + id)
  }
}

export function setName(shopName){
  return {
    type: actionTypes.NEW_SHOP_SET_NAME,
    shopName
  }
}

export function setLanguage(shopLanguage){
  return {
    type: actionTypes.NEW_SHOP_SET_LANGUAGE,
    shopLanguage
  }
}

export function setCountry(shopCountry){
  return {
    type: actionTypes.NEW_SHOP_SET_COUNTRY,
    shopCountry
  }
}

export function setCurrency(shopCurrency){
  return {
    type: actionTypes.NEW_SHOP_SET_CURRENCY,
    shopCurrency
  }
}

export function nameAvailable(shopName){
  return {
    type: actionTypes.NEW_SHOP_NAME_AVAILABLE,
    promise: request.get("available?name=" + shopName),
    shopName
  }
}

export function setStockAddMode(){
  return {
    type: actionTypes.NEW_SHOP_STOCK_ADD_MODE
  }
}

export function setStockListMode(){
  return {
    type: actionTypes.NEW_SHOP_STOCK_LIST_MODE
  }
}

export function addArticle($$article){
  return {
    type: actionTypes.NEW_SHOP_ADD_ARTICLE,
    $$article
  }
}

export function setActivePanel (activePanel) {
  return {
    type: actionTypes.NEW_SHOP_SET_CURRENT_PANEL,
    activePanel
  }
}