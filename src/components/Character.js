import React from 'react'

const Character = ({name, description, thumbnail}) => {
    return (
        <React.Fragment>
        <span >{name}</span>
        <span>{description}</span>
        <img  width='200px' 
        src={`${thumbnail.path}.${thumbnail.extension}`} alt = {name}/>
        </React.Fragment>
    )
}


export default Character