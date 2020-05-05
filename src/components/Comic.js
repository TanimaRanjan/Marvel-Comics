import React from 'react'

const Comic = ({item, onRemoveItem}) => {
    const {title, description, thumbnail} = item
    return (
        <div>
        <span><button onClick={()=> {onRemoveItem(item)}}>x</button></span>
        <img  width='100px' 
        src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
        
        <span >{title}</span>

    {/*<span>{description}</span> */}
        
        
        
        </div>
    )
}
export default Comic