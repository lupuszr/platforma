import API_URI      from 'lib/api'
import request 			from 'axios'
import * as actionTypes from '../constants/shopConstants';

export function addImage(image){
  return {
    type: actionTypes.NEW_SHOP_ADD_IMAGE,
    image
  }
}

export function removeImage(id){
  return {
    type: actionTypes.NEW_SHOP_REMOVE_IMAGE,
    id
  }
}



//// this is just a test rewrite later
export function createShop($$shop){
  const $$logo = $$shop.get('logo') 
  const $$banner = $$shop.get('banner')
  const $$language = $$shop.get('language')
  const $$name = $$shop.get('name')
  const $$currency = $$shop.get('currency')
  const $$country = $$shop.get('country')
  

  var data = new FormData();
  data.append('logo', $$logo[0]);
  data.append('banner', $$banner[0]);
  data.append('language', $$language);
  data.append('name', $$name);
  data.append('currency', $$currency);
  data.append('country', $$country);


  return {
    type: actionTypes.NEW_SHOP_CREATE_SHOP,
    promise: request.post('/shop',data,  {headers: {
    'X-Transaction': 'POST Image',
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }})
  }
}

/*TODO rewrite*/
export function uploadImages(images){
  var data = new FormData();
  var imgs = []
  var key = ""
  images.forEach( (img, index) => {
    data.append('files[images][]', img);
  })

  return {
    type: actionTypes.NEW_SHOP_UPLOAD_IMAGES,
    promise: request.post('/shop/article/upload_images',data,  {headers: {
    'X-Transaction': 'POST Image',
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }})
  }
}

export function createArticle($$article){
  
  var data = new FormData();
  data.append('name',$$article.get('name'))
  data.append('description',$$article.get('description'))
  data.append('price_cents',$$article.get('price'))
  data.append('category_id',$$article.get('category'))
  data.append('sub_category_id',$$article.get('subCategory'))
  $$article.get('images').forEach( (img,id) => {
    data.append('img_'+id,img)
  })

  return {
    type: actionTypes.NEW_SHOP_CREATE_ARTICLE,
    promise: request.post('/shop/article',data,  {headers: {
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

export function setLogo(logo){
  return {
    type: actionTypes.NEW_SHOP_SET_LOGO,
    logo
  }
}

export function removeLogo() {
  return {
    type: actionTypes.NEW_SHOP_REMOVE_LOGO
  }
}

export function setBanner(banner){
  return {
    type: actionTypes.NEW_SHOP_SET_BANNER,
    banner
  }
}

export function removeBanner () {
  return {
    type: actionTypes.NEW_SHOP_REMOVE_BANNER
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

export function setStockEditMode(){
  return {
    type: actionTypes.NEW_SHOP_STOCK_EDIT_MODE
  }
}


export function setArticle(id){
  return {
    type: actionTypes.NEW_SHOP_SET_ARTICLE,
    id
  }
}

export function addArticle($$article){
  return {
    type: actionTypes.NEW_SHOP_ADD_ARTICLE,
    $$article
  }
}

export function removeArticle(id){
  return {
    type: actionTypes.NEW_SHOP_REMOVE_ARTICLE,
    id
  }
}

export function setActivePanel (activePanel) {
  return {
    type: actionTypes.NEW_SHOP_SET_CURRENT_PANEL,
    activePanel
  }
}