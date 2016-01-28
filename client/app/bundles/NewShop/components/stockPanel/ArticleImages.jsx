import React    from 'react';
import Dropzone from 'react-dropzone';

const ArticleImage = ({$$images, i, addImage, removeImage}) => {
  if(!$$images.get(i)){
    return (
      <Dropzone className="article__add_container" multiple={false} onDrop={ files => {  addImage(files[0])} }>
        <div className="article__add">
          <span className="article__add_sign">+</span>
          <span className="article__add_overlay"></span>
        </div>
      </Dropzone>
    )
  }else {
    return (
      <div>
        <span onClick={e => removeImage(i)} className="glyphicon glyphicon-remove article__preview_remove"/>
        <img src={$$images.get(i).preview} className="img-responsive img-thumbnail margin-left-large"/>
      </div>
    )
  }
}

const ArticleImages = ({$$article, ...actions}) => {
  const $$images = $$article.get('images')
  return (
    <div className="row margin-top-large">    
    <div className="col-lg-1">
      <label className="margin-left-large article__label" htmlFor="title">Click to add or pull in your images</label>
    </div>
    {
      [...Array(5)].map( (val,i) => {
        return (
          <div className="col-lg-2">
          <ArticleImage key={i} {...{$$images, i, ...actions}}/>
          </div>
        )
      })
    }
    </div>
  )
}

export default ArticleImages;