import React    from 'react';

const Results = ({$$articles}) => {
	return(
		<div className="row search-results no-margin">
  		<div className="col-lg-12">
  		  <ul className="search-results__list">
          {$$articles.map((article,index) => {
            return(
              <li onClick={ node => {setTimeout(()=> {console.log("test")},100)}} key={index}>
                <span className="margin-right-xlarge">{article.get('name')}</span>
                <span>    </span>
                <span>{article.get('price')}</span>
                <span>&euro;</span>
              </li> 
            )
          })}
        </ul>
      </div>
  	</div>
	)
}

export default Results;