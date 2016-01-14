import React    from 'react';
import Dropzone from 'react-dropzone';


const AddProduct = ({$$shopStore,setStockListMode,uploadImages, addArticle, fetchCategories,fetchSubCategories, cleanArticle, articleSetName, articleSetDescription, articleSetPrice, articleSetMainCategory, articleSetCategory, articleSetSubCategory}) => {
  const $$management = $$shopStore.get('management')
  const $$mainCategories = $$shopStore.get('mainCategories')
  const $$categories = $$shopStore.get('categories')
  const $$subCategories = $$shopStore.get('subCategories')
  const $$article = $$shopStore.get('article')
  const reader  = new FileReader();

  
  return(
    <div className="row">
      <div className="col-lg-12 stock__container">
        <div className="row center stock__header">
          <h2>Create your new stock</h2>
        </div>
        <div className="row margin-top-large">
          <div className="col-lg-1">
            <label className="margin-left-large" htmlFor="title">Title</label>
          </div>
          <div className="col-lg-4">          
            <input onChange={ node =>{articleSetName(node.target.value)} }  type="text" className="form-control stock__input" id="title" placeholder="Title"/>
          </div>
        </div>
        <div className="row margin-top-large">
          <div className="col-lg-3">
            <Dropzone multiple={false} onDrop={ files => {  uploadImages(files)} }>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
        </div>
        <div className="row margin-top-large">
          <div className="col-lg-1">
            <label className="margin-left-large" htmlFor="categories">Categories</label>
          </div>
          <div className="col-lg-3">
            <select className="form-control article__category__select" id="categories" onChange={ node => { fetchCategories(node.target.value); articleSetMainCategory(node.target.value)}}>
              <option selected disabled>Choose Main Category</option>
              {
                $$mainCategories.map( category => {
                  return (
                    <option value={category.get('id')} key={category.get('id')}>{category.get('name')}</option>
                  )
                })
              }
            </select>
          </div>
          {!$$categories.isEmpty()?
          <div className="col-lg-3">
            <select className="form-control article__category__select" onChange={ node => { fetchSubCategories(node.target.value); articleSetCategory(node.target.value)}}>
              <option selected disabled>Choose Category</option>
              {
                $$categories.map( category => {
                  return (
                    <option value={category.get('id')} key={category.get('id')}>{category.get('name')}</option>
                  )
                })
              }
            </select>
          </div>:null
          }
          {!$$subCategories.isEmpty()?
          <div className="col-lg-3">
            <select className="form-control article__category__select" onChange={ node => { articleSetSubCategory(node.target.value);}}>
              <option selected disabled>Choose Sub Category</option>
              { 
                $$subCategories.map( category => {
                  return (
                    <option value={category.get('id')} key={category.get('id')}>{category.get('name')}</option>
                  )
                })
              }
            </select>
          </div>:null
          }
        </div>  

        <div className="row margin-top-small">
          <div className="col-lg-1">
            <label className="margin-left-large" htmlFor="description">Description</label>
          </div>
          <div className="col-lg-4 ">          
            <textarea onChange={ node => { articleSetDescription(node.target.value)} } rows="6"  className="form-control stock__input" id="description" placeholder="description"/>
          </div>
        </div>

        <div className="row margin-top-small">  
          <div className="col-lg-1">
            <label className="margin-left-large" htmlFor="price">Price</label>
          </div>
          <div className="col-lg-4 ">          
            <input onChange={ node => articleSetPrice(node.target.value) } type="text" className="form-control stock__input" id="price" placeholder="price" />
          </div>            
        </div>

        <div className="row margin-top-large margin-bottom-large">  
          <div className="col-lg-6 center">
              <button className="btn btn-default stock__button" onClick={e => {cleanArticle();setStockListMode()}}><span className="glyphicon glyphicon-remove margin-right-tiny"></span>Back</button>
              <button className="btn btn-default stock__button" onClick={e => {addArticle($$article);cleanArticle();setStockListMode()}}><span className="glyphicon glyphicon-ok margin-right-tiny"></span>Submit</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddProduct;