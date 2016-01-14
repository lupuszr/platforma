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

const Product = ({$$article}) => {
  return (
    <div className="col-lg-3">
      <div className="thumbnail">
        <div className="article__image"></div>
        <div className="caption article__container">
          <span className="article__title">{$$article.get('name')}</span>
          <span className="article__price">{$$article.get('price')}</span>
          <hr className="article__separator"></hr>
          <p>
            <a href="#" className="btn btn-default article__button" role="button">Remove</a> 
            <a href="#" className="btn btn-default article__button" role="button">Edit</a>
          </p>
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

const List = ({$$shopStore,setStockAddMode}) => {
  const $$management = $$shopStore.get('management')
  const $$articles = $$shopStore.getIn(['shop','articles'])
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
          <AddProduct setStockAddMode={setStockAddMode}></AddProduct>      
          {
            $$articles.map(($$article , index) => {
              return (
                <Product key={index} $$article={$$article}></Product>
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
      </div>
    </div>
  )
}

export default List;