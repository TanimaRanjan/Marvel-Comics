const API_ENDPOINT = 'https://gateway.marvel.com:443/v1/public/'
//characters?limit=100&offset=20'
const PARAM_LIMIT='?limit=100'
const PARAM_CHARACTER = 'characters' 
const PARAM_COMICS = 'comics'


 const fetchCharacters = async () => {

    const response = await fetch(`${API_ENDPOINT}${PARAM_CHARACTER}${PARAM_LIMIT}&apikey=${process.env.REACT_APP_GOOGLE_KEY}`)
    const result = await response.json()
    
    //.then(response => response.json())
    //.then(result => {
        return result.data.results 
    //})
    //.catch((error) => console.log(error))


}

export const fetchComics = async () => {

    try {
        const response = await fetch(`${API_ENDPOINT}${PARAM_COMICS}${PARAM_LIMIT}&apikey=${process.env.REACT_APP_GOOGLE_KEY}`)
        const result = await response.json()
        return result.data.results 
        // throw 'error'
    } catch {
        throw 'error'
    }
    
    

    // console.log(process.env.API_KEY)
    // console.log(process.env.REACT_APP_GOOGLE_KEY)
    // fetch(`${API_ENDPOINT}${PARAM_COMICS}${PARAM_LIMIT}&apikey=${process.env.REACT_APP_GOOGLE_KEY}`)
    // .then(response => response.json())
    // .then(result => {
    //     return result.data.results
    // })
    // .catch((error) => console.log(error))

}

export default fetchCharacters