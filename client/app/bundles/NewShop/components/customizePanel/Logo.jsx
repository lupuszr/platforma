import React    from 'react';
import Dropzone from 'react-dropzone';

const Logo = ({$$management,$$shop, setLogo, removeLogo}) => {
  const $$nameAvailable = $$management.get('nameAvailable')
  const $$logo = $$shop.get('logo')

  if (!$$logo){
    return(
      <div className="row">
        <div className="col-lg-12">
          <Dropzone multiple={false} onDrop={ file => { setLogo(file); } }>
            <div>Set your logo.</div>
          </Dropzone>
        </div>
      </div>
    )
  }else {
    return(
      <div className="row">
        <div className="col-lg-12">
          <span onClick={e => removeLogo()} className="glyphicon glyphicon-remove article__preview_remove"/>
          <img src={$$logo[0].preview} className="img-responsive img-thumbnail" />
        </div>
      </div>
    )
  }

}

export default Logo;