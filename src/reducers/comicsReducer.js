const comicsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_COMICS':
            return action.payload;
        case 'REMOVE_COMIC':
            return state.filter(comic => action.payload.id !== comic.id);
        default:
            throw new Error()
        
    }
}

export default comicsReducer