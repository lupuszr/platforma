import React from 'react';

const List = ({$$shopStore}) => {
  const $$articles = $$shopStore.get('articles');
  return (
    <div className="row margin-x-180">
      {$$articles.map( ($$article,key) => {
        return (
          <div key={key} className="col-lg-3 margin-top-large">
            <div className="article__container">
              <img className="article__image" src={$$article.get("img_0").get("thumbnail").get("url")} />
              <hr/>
              <div className="caption">
                <h4>{$$article.get("name")}</h4>
                <p className="truncate">{$$article.get("description")}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List;