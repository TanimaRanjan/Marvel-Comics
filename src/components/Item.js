import React from 'react'

const Item = ({item, onRemoveItem}) => {
    const {url, title, author, num_comments, points} = item
    return (
        <div>
            <span>
            <a href={url} alt={title} >{title}</a>
            </span>
            <span> {author} </span>
            <span> {num_comments} </span>
            <span> {points} </span>
            <span><button onClick={()=> onRemoveItem(item)}></button></span>
        </div>
    )

}

export default Item