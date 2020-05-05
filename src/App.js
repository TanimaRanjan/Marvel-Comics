import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import List from './components/List'
import Search from './components/Search'
import Item from './components/Item'
import Comic from './components/Comic'
import Character from './components/Character'

import LoadingPage from './components/LoadingPage'
import ErrorPage from './components/ErrorPage'

import comicsReducer from './reducers/comicsReducer'

import fetchCharacters, {fetchComics } from './utils/fetchData'
// import initialcomics from './comics.json'
//import characters  from './characters.json'



const useSemiPersistentState = (key, initialState) => {

  const [value, setValue] = useState(
    localStorage.getItem(key) || initialState
  )

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue] 
}


function App() {

  const welcome = {
    greeting:'Marvel',
    title:'Comics'
  }
  
  // Set SearchTearm using custom hook 
   const [searchTerm , setSearchTerm] = useSemiPersistentState('search', '')

   // State management using useReducer Hook
   // Page the reducer and the initial State
   // dispatch Function will be used for reducer - Passing the Type and Payload
   // Combining useStates to useReducers 
   const [comics, dispatchComics ] = useReducer(
    comicsReducer, 
    {data:[], isLoading:false, isError:false})
   

    useEffect(() => {
      dispatchComics({type:'COMIC_FETCH_INIT'})
      //setIsLoading(true)
      fetchComics().then(results => {

        // Call the dispatch function by passing type and payload
        // In this case the entire fetched result
        // When we enhace to make infinite loop - Will change the reducer to add the comic
        dispatchComics({
          type:'COMIC_FETCH_SUCCESS',
          payload:results
        })


      }).catch(()=> {
        dispatchComics({type:'COMIC_FETCH_ERROR'})
        //setError(true)
      })
      //setIsLoading(false)
    }, [])


  const handleChange = e => {
      setSearchTerm(e.target.value)
  }


  const handleRemoveItem = item => {
    // const newComics = comics.filter(comic => item.id != comic.id)
    dispatchComics({
      type:'REMOVE_COMIC',
      payload:item
    })
    // setComics(newComics)
  }

  // fetchComics()
  const searchList = comics.data.filter((comic) => comic.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (

    <div className="App">
     <h1>{welcome.greeting} {welcome.title} </h1>

     <Search 
      id='search'
      label='Search'
      isFocused
      onSearch={handleChange} 
      value={searchTerm}>
      <strong>Search:</strong></Search> 


     {/* <List list={searchedStories} component={Item}/>   */}

      <hr />
      
      {comics.isError && <ErrorPage />}

      {comics.isLoading ? ( 
        <LoadingPage />
        ) : (
          <List list={searchList} onRemoveItem={handleRemoveItem} component={Comic}  />
        )
      }


      {/* <hr /> 
     
      <List list={characters} component={Character} /> 
      */}
      
    </div>
  );
}

export default App;


