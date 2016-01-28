import React    from 'react';
const MAX_ARTICLE_COUNT = 8;

const Placeholder = ({}) => {
  return (
    <div className="col-lg-3">
      <div className="thumbnail">
        <div className="placeholder__image"></div>
        <div className="caption placeholder__text">
        </div>
      </div>
    </div>
  )
}

const Product = ({$$article,index, ...actions}) => {
  const $$image = $$article.get('images').get(0)
  return (
    <div className="col-lg-3">
      <div className="thumbnail">
        <div className="article__image center">
          <img src={$$image.preview} className="article__image"/>
        </div>
        <div className="caption article__container">
          <span className="article__title">{$$article.get('name')}</span>
          <span className="article__price">{$$article.get('price')}</span>
          <hr className="article__separator"></hr>
          <div className="row">
            <div className="col-lg-6 padding-right-tiny">
              <a href="#" className="btn btn-default article__button" role="button" onClick={e => actions.removeArticle(index)}>Remove</a> 
            </div>
            <div className="col-lg-6 padding-left-tiny">
              <a href="#" className="btn btn-default article__button" role="button" onClick={e => { actions.setArticle(index); actions.setStockEditMode(); }}>Edit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AddProduct = ({setStockAddMode}) => {
  return (
    <div onClick={e => {setStockAddMode()}} className="col-lg-3">
      <div className="thumbnail">
        <div className="placeholder__add_stock">
          <span className="add_stock_glyphicon glyphicon glyphicon-plus-sign"></span>
          <br></br>
          <span className="add_stock_text">Add An Article</span> 

        </div>
        <div className="caption placeholder__text">
        </div>
      </div>
    </div>
  ) 
}

const List = ({$$shopStore,...actions}) => {
  const $$management = $$shopStore.get('management')
  const $$articles = $$shopStore.getIn(['shop','articles'])
  const $$shop = $$shopStore.get('shop')
  return(
    <div className="row">
      <div className="col-lg-12">
        <div className="row no-margin stock__header center margin-bottom-large">
          <div className="col-lg-12">
          <h1>Stock Listing</h1>
          <p>Click to add a new article </p>
          </div>
        </div>
        <div className="row">
          <AddProduct setStockAddMode={actions.setStockAddMode}></AddProduct>      
          {
            $$articles.map(($$article , index) => {
              return (
                <Product key={index} {...{$$article,index,...actions}}></Product>
              )
            }) 
          }
          {
            [...Array(MAX_ARTICLE_COUNT - ($$articles.size + 1))].map((val , index) => {
              return (
                <Placeholder key={index}></Placeholder>
              )
            }) 
          }
        </div>
        <div className="row">
          <h1 onClick={e => actions.createShop($$shop)}>Create Shop</h1>
        </div>
      </div>
    </div>
  )
}

export default List;