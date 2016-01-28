import React    from 'react';
import ArticleImages from './ArticleImages'
import ProductInput from './Product/Input'
import * as Categories from './Product/SelectCategories'

const EditProduct = ({$$shopStore, ...actions }) => {
  const $$article = $$shopStore.get('article')
  
  return(
    <div className="row">
      <div className="col-lg-12 stock__container">
        <div className="row center stock__header">
          <h2>Edit your stock</h2>
        </div>
        <ProductInput action={actions.articleSetName} value={$$article.name} identifier="title"/>
        <ArticleImages {...{$$article, ...actions }} ></ArticleImages>
        <div className="row margin-top-large">
          <div className="col-lg-1">
            <label className="margin-left-large article__label" htmlFor="categories">Categories</label>
          </div>
          <Categories.Main {...{$$shopStore, ...actions}}/>
          <Categories.Top {...{$$shopStore, ...actions}}/>
          <Categories.Sub {...{$$shopStore, ...actions}}/>
        </div>  
        <ProductInput action={actions.articleSetDescription} value={$$article.description} identifier="description"/>
        <ProductInput action={actions.articleSetPrice} value={$$article.price} identifier="price"/>
        <div className="row margin-top-large margin-bottom-large">  
          <div className="col-lg-6 center">
              <button className="btn btn-default stock__button" onClick={e => { actions.cleanArticle(); actions.setStockListMode() }}><span className="glyphicon glyphicon-remove margin-right-tiny"></span>Back</button>
              <button className="btn btn-default stock__button" onClick={e => { actions.createArticle($$article); actions.addArticle($$article); actions.cleanArticle(); actions.setStockListMode()}}><span className="glyphicon glyphicon-ok margin-right-tiny"></span>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct;