import { useState } from 'react'

/// import necessary components

import './App.css'
import SongsDisplay from './components/SongSelections/SongsDisplay'
import ResultsDisplay from './components/Results/ResultsDisplay'
import SearchDisplay from './components/Search/SearchDisplay'

function App() {
  // define app state

  const authToken = "BQCPGQJMN89ShDv71sBA2v324zcrqGQqwwC_YTglZWCOqLx3YnVJC9S4rExjBFR1oFeq5JXvhqDhE7kKbjgQGxpYGhfWjLsEuMpcI4SJ7xZvOhsre8V9"

  const [query, setQuery] = useState("")

  const [searchData, setSearchData] = useState(null)

  const [resultsData, setResultsData] = useState(null)

  const [formData, setFormData] = useState("")

  const [songSelections, setSongSelections] = useState([])

  function addQuery(query) {
    console.log(query)
    setQuery(query)
  }

  function clearSearch() {
    setFormData("")
    setSearchData(null)
  }

  function addSelection(selection) {
    let newSelections = [...songSelections, selection]
    setSongSelections(newSelections)

  }



  async function handleSearch(evt) {
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
        headers: { 'Authorization': `Bearer ${authToken}` },

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

  async function handleFetchResults(evt) {
    try {
      let url = 'https://api.spotify.com/v1/recommendations'
      let selectionsString = songSelections.join(",")

      let params = new URLSearchParams({
        limit: 5,
        market: 'US',
        seed_artists: '',
        seed_genres: '',
        seed_tracks: selectionsString,
      })

      let options = {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${authToken}` },

      }
      url = url + "?" + params.toString()

      let response = await fetch(url, options)
      let responseData = await response.json()

      const newResultsData = responseData.tracks.map(track => {
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
      <SongsDisplay 
      songSelections={songSelections}
      authToken={authToken} 
      />

      <SearchDisplay
        addQuery={addQuery}
        handleSearch={handleSearch}
        searchData={searchData}
        formData={formData}
        setFormData={setFormData}
        clearSearch={clearSearch}
        addSelection={addSelection}
      />

      <ResultsDisplay
        resultsData={resultsData} />
      <button onClick={handleFetchResults}>Get recommendations</button>

    </>
  )
}

export default App
