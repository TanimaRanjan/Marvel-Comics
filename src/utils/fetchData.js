

const API_ENDPOINT = 'https://gateway.marvel.com:443/v1/public/'
//characters?limit=100&offset=20'
const PARAM_API='apikey='
const PARAM_LIMIT='limit='
const PARAM_LIMIT_COUNT='100'
const PARAM_OFFSET='offset='
const PARAM_OFFSET_COUNT='0'
const PARAM_CHARACTER = 'characters' 
const PARAM_COMICS = 'comics'

//comics
//creators
//characters
//events
//series
//stories


 const fetchCharacters = async ({type='comics', offset=0}={}) => {

    
    const response = await fetch(`${API_ENDPOINT}${PARAM_CHARACTER}?${PARAM_LIMIT}${PARAM_LIMIT_COUNT}&${PARAM_API}${process.env.REACT_APP_GOOGLE_KEY}`)
    const result = await response.json()
    
    //.then(response => response.json())
    //.then(result => {
        return result.data.results 
    //})
    //.catch((error) => console.log(error))


}

export const fetchComics = async(type='comics', offset=2) => {
    //console.log('FETCHING ', offset_count)
    let offset_count = offset*PARAM_LIMIT_COUNT;
    try {
        const response = await fetch(`${API_ENDPOINT}${type}?${PARAM_LIMIT}${PARAM_LIMIT_COUNT}&${PARAM_OFFSET}${offset_count}&${PARAM_API}${process.env.REACT_APP_GOOGLE_KEY}`)
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