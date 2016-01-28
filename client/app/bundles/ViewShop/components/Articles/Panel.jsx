import React from 'react'
import List from './List'


const Panel = ({$$shopStore,...actions}) => {
  return (
    <div>
      <List {...{$$shopStore,...actions}}></List> 
    </div>
  )
}

export default Panel;