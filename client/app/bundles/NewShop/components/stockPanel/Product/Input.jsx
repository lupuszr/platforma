import React    from 'react';

const Input = ({identifier, value, action}) => {
  return(
  	<div className="row margin-top-large">
	    <div className="col-lg-1">
	      <label className="margin-left-large article__label" htmlFor={identifier}>{identifier}</label>
	    </div>
	    <div className="col-lg-4">          
	      <input onChange={ node =>{ action(node.target.value) } }  defaultValue={value} type="text" className="form-control stock__input" id={identifier} placeholder={identifier}/>
	    </div>
  	</div>
  )
}

export default Input;