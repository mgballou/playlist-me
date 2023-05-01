import { useState } from 'react'

/// import necessary components

import './App.css'
import SongSearchForm from './components/Search/SearchForm'
import ResultsDisplay from './components/Results/ResultsDisplay'
import SearchDisplay from './components/Search/SearchDisplay'

function App() {
  // define app state

  const authToken = "BQDdDgttOZ54KWX4ql4zaJOR2UlyoUaT4HWALShHaTZKtAPDZ_-zAhtbzp33OoJQ3Tq35EhXb8u44o-ltRnY4Vyb6MEMqLxA5W4OGbMLLJVZA626DvCi"

  const [query, setQuery] = useState("")

  const [searchData, setSearchData] = useState(null)


  const [resultsData, setResultsData] = useState(null)

  function addQuery(query){
    console.log(query)
    setQuery(query)
  }

 

  async function handleSearch(evt){
    evt.preventDefault()
    try {
      let url = "https://api.spotify.com/v1/search"
      let params = new URLSearchParams({
        q: query,
        market: 'US',
        type: 'track'
  
      })

      let options = {
        method: 'GET',
        headers: {'Authorization': `Bearer ${authToken}`},
           
      }

      url = url + "?" + params.toString()

      let response = await fetch(url, options)
      let responseData = await response.json()
      console.log(responseData)
      let searchResponse = responseData.tracks.items

      setSearchData(searchResponse)
    } catch (error) {
      console.log(error)
    }
    
  }

  async function handleFetchResults(evt){
    try {
      let url = 'https://api.spotify.com/v1/recommendations'

      let params = new URLSearchParams({
        limit: 5,
        market: 'US',
        seed_artists: '',
        seed_genres: '',
        seed_tracks: '0w2piYWj1F2bzUftzGJgK9,6wwrYruEgWlowPDZMq5116,5jSfKTSGeRp8ir8qaobdcJ,0zO8ctW0UiuOefR87OeJOZ,5taFA9xWKxXbWBpJDoQt9t',
      })

      let options = {
        method: 'GET',
        headers: {'Authorization': `Bearer ${authToken}`},
           
      }
      url = url + "?" + params.toString()

      let response = await fetch(url, options)
      let responseData = await response.json()
      
      const newResultsData = responseData.tracks.map(track=>{
          return {
            tName: track.name,
            tArtist: track.artists[0].name,
            tLink: track.external_urls.spotify,
            spotifyId: track.id
          }
        })
        setResultsData(newResultsData)
    } catch (error) {
      console.log(error)  
    }
  }


  return (
    // return the primary page of the app, laid out accordingly
    // use hooks and proper binding to attach inputs to state
    //pass down props defined in state above
    <>
      <SearchDisplay addQuery={addQuery} handleSearch={handleSearch} searchData={searchData}/>
      <ResultsDisplay resultsData={resultsData} />
      <button onClick={handleFetchResults}>Get recommendations</button>

    </>
  )
}

export default App
