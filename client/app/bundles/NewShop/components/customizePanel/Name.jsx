import React    from 'react';

const Name = ({$$management, setName, nameAvailable}) => {
  const $$nameAvailable = $$management.get('nameAvailable')
  let shopName = ""
  return(
    <div className="row">
      <div className="col-lg-12 center">
        <h1>Your Shop Name</h1>
        <div className="input-group">
          <input type="text" className="form-control search-bar" placeholder="Your shop name" 
            onChange={node => {
              shopName = node.target.value; setName(node.target.value);
            }}
          />
          <span className="input-group-addon">
            { $$nameAvailable !== null ? String($$nameAvailable): "" }
          </span>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={ e => {nameAvailable(shopName)} }>Available?</button>
          </span>

        </div>
      </div>
      <div className="col-lg-12 center">
        <button className="btn btn-default" type="button" onClick={ e => {setName(shopName)} }>Next</button>
      </div>
    </div>
  )
}

export default Name;