import { useState, useEffect } from 'react'

/// import necessary components

import './App.css'
import './Skeleton.scss'
import Header from './components/Header/Header'
import SongsDisplay from './components/SongSelections/SongsDisplay'
import ResultsDisplay from './components/Results/ResultsDisplay'
import ControlsDisplay from './components/ControlPanel/ControlsDisplay'

function App() {
  // define app state

  const [authToken, setAuthToken] = useState(null)

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

  function resetAll() {
    clearSearch()
    setQuery("")
    setResultsData(null)
    setSongSelections([])

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

  async function getAuthToken() {
    let url = 'https://us-east4-playlist-me-385520.cloudfunctions.net/retrievekey'
    let options = {
      method: "POST",
      redirect: 'follow',

    }

    try {
      let response = await fetch(url, options)
      // console.log(response)
      let tokenData = await response.json()
      // console.log(tokenData)
      setAuthToken(tokenData.access_token)


    } catch (err) {
      console.log(err)

    }

  }



  useEffect(() => { getAuthToken() }, [])

  return (
    <>
      <Header />
      <main>
        <section className="container">
          <p className='text-centered'>select up to five songs and receive tailored recommendations</p>
          <div className='row'>

            <SongsDisplay
              songSelections={songSelections}
              authToken={authToken}
              handleFetchResults={handleFetchResults}
            />

            {resultsData ? <ResultsDisplay resultsData={resultsData} resetAll={resetAll} /> :
              <ControlsDisplay
                addQuery={addQuery}
                handleSearch={handleSearch}
                searchData={searchData}
                formData={formData}
                setFormData={setFormData}
                clearSearch={clearSearch}
                addSelection={addSelection}

              />}
          </div>

        </section>

      </main>
    </>
  )
}

export default App
