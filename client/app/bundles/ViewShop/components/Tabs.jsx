import React from 'react'

const Tabs = ({...actions}) => {
  return (
    <div className="row margin-x-180">
      <div className="col-lg-12">
        <ul className="nav nav-tabs">
          <li role="presentation" className="active"><a href="#">Articles</a></li>
          <li role="presentation"><a href="#">Review</a></li>
          <li role="presentation"><a href="#">Contact</a></li>
          <li role="presentation"><a href="#">About</a></li>
        </ul>
      </div>
    </div>
  ) 
}

export default Tabs;