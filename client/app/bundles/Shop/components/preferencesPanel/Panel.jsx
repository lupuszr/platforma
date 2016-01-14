import React    from 'react';

const Panel = ({$$shopStore,setLanguage, setCountry, setCurrency}) => {
  const $$management = $$shopStore.get('management')
  const $$countries  = $$shopStore.get('countries')
  const $$languages  = $$shopStore.get('languages')
  const $$currencies = $$shopStore.get('currencies') 
  const $$shop       = $$shopStore.get('shop')

  let fieldsSelected = () => {
    return (!!$$shop.get('language') && !!$$shop.get('country') && !!$$shop.get('currency'));
  }
  
  return(
    <div className="row stock__container">
      <div className="col-lg-12 ">
        
        <div className="row stock__header center margin-bottom-large"> 
          <h1>Preferences</h1>
          <p>Set your shop regional preferences</p>
        </div>
        
        <div className="row">
          <div className="col-lg-1">
            <label className="margin-left-large" htmlFor="countries">Country</label>
          </div>
          <div className="col-lg-4">
            <select className="form-control" onChange={ node => { setCountry(node.target.value);}}>
            {
              $$countries.map( country => {
                return (
                  <option value={country}>{country}</option>
                )
              })
            }
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-1">
            <label className="margin-left-large" htmlFor="languages">Language</label>
          </div>
          <div className="col-lg-4">
            <select className="form-control" onChange={ node => { setLanguage(node.target.value);}}>
            {
              $$languages.map( language => {
                return (
                  <option value={language}>{language}</option>
                )
              })
            }
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-1">
            <label className="margin-left-large" htmlFor="currencies">Currency</label>
          </div>
          <div className="col-lg-4">  
            <select className="form-control" onChange={ node => {  setCurrency(node.target.value)}}>
            {
              $$currencies.map( currency => {
                return (
                  <option value={currency}>{currency}</option>
                )
              })
            }
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {fieldsSelected()?
              <button className="btn btn-default" type="submit" onClick={ node => {}}>Next</button>:
              <button className="btn btn-default" type="submit" disabled="disabled">Next</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel;