import { useState } from 'react'

/// import necessary components

import './App.css'
import SongSelectorForm from './components/SongSelector/SongSelectorForm'
import ResultsDisplay from './components/Results/ResultsDisplay'

function App() {
  // define app state

  const authToken = "BQAt75pU_UgapDOIFlsuN4fvL3TRjgGDPPhNdnAFvf-LOF2VUxoQPYtMUNfoC-Fztk8Xms2BHdnK6plSJoNMV4gMbtn9JGtV5uPVmCVDUW5cIXWJmm6Q"


  const [formData, setFormData] = useState({
    song1: "",
    song2: "",
    song3: "",
    song4: "",
    song5: ""

  })

  const [resultsData, setResultsData] = useState([
    {tName:"", tArtist:"", tLink:""},
    {tName:"", tArtist:"", tLink:""},
    {tName:"", tArtist:"", tLink:""},
    {tName:"", tArtist:"", tLink:""},
    {tName:"", tArtist:"", tLink:""}
  ])



  function handleFormChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value }
    setFormData(newFormData)
    console.log(formData)
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
      // console.log(resData)
      // responseData.tracks.forEach((track, idx) => {

      //   let tName = track.name
      //   let tArtist = track.artists[0].name
      //   let tLink = track.external_urls.spotify

      //   console.log(tName, tArtist, tLink)
      // }
      //   )
      
       const newResultsData = responseData.tracks.map(track=>{
          return {
            tName: track.name,
            tArtist: track.artists[0].name,
            tLink: track.external_urls.spotify
          }
        })

        console.log(newResultsData)

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
      <SongSelectorForm formData={formData} handleFormChange={handleFormChange} />
      <ResultsDisplay resultsData={resultsData} />
      <button onClick={handleFetchResults}></button>

    </>
  )
}

export default App
