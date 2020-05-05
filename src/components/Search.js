import React from 'react'

const Search = (
    {   id,
        children,
        value,
        isFocused,
        type='text',
        onSearch 
        
    }
    ) => {
        
        const inputRef = React.useRef()

        React.useEffect(() => {
            if(isFocused) {
                inputRef.current.focus()
            
            }
        }, [isFocused])

    return (
        <div>
        <label htmlFor={id}>{children}</label>
        <input id={id} 
            ref={inputRef}
            type={type} value={value}
            autoFocus={isFocused}
            onChange={onSearch}></input>
            
        </div>
    )
}

export default Search