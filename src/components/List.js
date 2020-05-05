import React from 'react'
// import Item from './Item'

const List = ({
    component:Component,
    list,
    onRemoveItem
}) => {

      return (

        list.map(item => (
          <Component key={item.id} item={item} onRemoveItem={onRemoveItem} />
        ))
      )

}

export default List