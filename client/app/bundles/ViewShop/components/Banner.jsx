import React    from 'react';

const Banner = ({$$shopStore}) => {
  console.log($$shopStore.toJS())
  const BannerImage = $$shopStore.getIn(['shop','banner'])
  const LogoImage = $$shopStore.getIn(['shop','logo'])
  const ShopName = $$shopStore.getIn(['shop','name'])
  return (
    <div className="margin-x-180">
    <div className="row center stock__header">
      <div className="col-lg-12">
        <h2>{ShopName}</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <img className="banner__image" src={BannerImage.get('url')} />
      </div>
      <div className="banner__container">
        <div className="row">
          <div className="col-lg-3">
            <img className="thumbnail logo__image" src={LogoImage.get('url')} />
          </div>
          <div className="col-lg-9">
            <h1 className="shop__name">{ShopName}</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner;