import React    from 'react';
import Dropzone from 'react-dropzone';

const Banner = ({$$management,$$shop, setBanner, removeBanner}) => {
  const $$nameAvailable = $$management.get('nameAvailable')
  const $$banner = $$shop.get('banner')

  if (!$$banner){
    return(
      <div className="row">
        <div className="col-lg-12">
          <Dropzone multiple={false} onDrop={ file => {  setBanner(file)} }>
            <div>Set Banner.</div>
          </Dropzone>
        </div>
      </div>
    )
  }else {
    return(
      <div className="row">
        <div className="col-lg-12">
          <span onClick={e => removeBanner()} className="glyphicon glyphicon-remove article__preview_remove"/>
          <img src={$$banner[0].preview} className="img-responsive img-thumbnail" />
        </div>
      </div>
    )
  }
}

export default Banner;