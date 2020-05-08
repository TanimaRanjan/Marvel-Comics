const comicsReducer = (state, action) => {
    switch(action.type) {
        case 'COMIC_FETCH_INIT':
            return {
                ...state, 
                isLoading:true,
                isError:false
            };
        case 'COMIC_FETCH_SUCCESS':
            return {
                ...state,
                isLoading:false,
                isError:false,
                data:action.payload
            };
        case 'COMIC_FETCH_ERROR':
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        case 'REMOVE_COMIC':
            return {
                ...state,
                data:state.filter(comic => action.payload.id !== comic.id)
            }
            
        default:
            throw new Error()
        
    }
}

export default comicsReducer