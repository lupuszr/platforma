import React from 'react';

const SearchInput = ({searchProduct, clearResults}) => {
	let productName = "";
  return(
    <div className="row margin-top-xlarge">
      <div className="col-lg-12">
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-default search-bar__button" type="button" onClick={ e => {searchProduct(productName)} }><span className="glyphicon glyphicon-search"></span></button>
          </span>
          <input type="text" className="form-control search-bar" placeholder="Search for product" 
            onChange={node => {
              productName = node.target.value;
              searchProduct(productName)
            }}
            onMouseLeave={node => {
              setTimeout(() => {
                clearResults()
              }, 3000);
            }}
            />
        </div>
      </div>
    </div>
	)
}

export default SearchInput;