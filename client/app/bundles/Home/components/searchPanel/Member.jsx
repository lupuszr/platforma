import React from 'react';

const Member = ({}) => {
 return(
  <div className="row margin-top-medium">
    <div className="col-lg-6 col-lg-offset-6">
      <div className="btn-group btn-group-md move-right" role="group" aria-label="...">
        <a className="btn btn-primary" href="register/new?role=vendor">Become a Seller</a>
        <a className="btn btn-primary" href="register/new?role=vendor">Become a Buyer</a>
      </div>
    </div>
  </div>
 );
}

export default Member;