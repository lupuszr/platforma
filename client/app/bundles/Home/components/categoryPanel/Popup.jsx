import React from 'react';

const Popup = ({$$categoryStore}) => {
  const $$management = $$categoryStore.get("management") 
  const $$mainCategories = $$categoryStore.get("mainCategories") 
  const $$subCategories = $$categoryStore.get("categories") 
  const visibleCategory = $$management.get("popupVisible")
  const $$currentMainCategory = $$mainCategories.find( val =>  val.get("name") === visibleCategory)
  
  if (!!$$management.get("popupVisible") && !!$$currentMainCategory){
    const $$currentSubCategories = $$subCategories.filter( val => val.get("main_category_id") === $$currentMainCategory.get("id")  )
    
    return(
      <div className="row">
        <div className="col-lg-2">
          <div className="row">
            <div className="col-lg-12">
              <ul className="subCategory__list margin-top-small">
                {$$currentSubCategories.map( node => {
                  return (
                    <li key={node.get("id")}>
                      {node.get("name")} <span className="move-right">></span>
                    </li>
                  )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          logaads
        </div>
        <div className="col-lg-3">
          <div className="row">
            <div className="col-lg-12 center">
              <img className="margin-top-small mainCategory__image" src={"/assets/categories/" + $$currentMainCategory.get('img_url')}></img>
            </div>
          </div>
          <div className="row center">
            <div className="col-lg-12 center">
            Our Experts said:
            Lorem Ipsum
            Lorem Ipsum
            Lorem Ipsum
            Lorem Ipsum
            Lorem Ipsum
            </div>
          </div>
        </div>
      </div>
    );
  }else {
    return(<div></div>)
  };
}

export default Popup;