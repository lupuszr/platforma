import React      from 'react';
import List       from './List';
import AddProduct from './AddProduct'

const Panel = ({$$shopStore,...actions}) => {
  const $$management = $$shopStore.get('management')
  switch($$management.get('stockMode')){
    case "ADD_MODE":{
      return(
        <div className="row">
          <div className="col-lg-12">
            <AddProduct {...{$$shopStore,...actions}} ></AddProduct>
          </div>
        </div>
      )
    }
    case "LIST_MODE":{
      return(
        <div className="row">
          <div className="col-lg-12">
            <List {...{$$shopStore,...actions}} ></List>
          </div>
        </div>
      ) 
    }
  }
}

export default Panel;