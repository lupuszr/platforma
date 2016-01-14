import React from 'react';

const Bar = ({$$categoryStore, showPopup}) => {
  const $$mainCategories = $$categoryStore.get("mainCategories") 

  return(
    <div className="row">
      <div className="col-lg-12 center categoryBar__container">
        {$$mainCategories.map( node => { 
          const categoryName = node.get("name")
          return (
        	   <span onMouseEnter={ e => {showPopup(categoryName)}} className="categoryBar__elem padding-medium">{categoryName}</span>
          ) 
        })}
      </div>
    </div>
  );
}

export default Bar;