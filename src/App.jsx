import { useState } from 'react'

/// import necessary components

import './App.css'
import SongSelector from './components/SongSelector/SongSelectorForm'

function App() {
  // define app state

  const [formData, setFormData] = useState({
    song1: "",
    song2: "",
    song3: "",
    song4: "",
    song5: ""

  })

  function handleFormChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value }
    setFormData(newFormData)
    console.log(formData)
  }


  return (
    // return the primary page of the app, laid out accordingly
    // use hooks and proper binding to attach inputs to state
    //pass down props defined in state above
    <>
      <SongSelector formData={formData} setFormData={setFormData} handleFormChange={handleFormChange} />

    </>
  )
}

export default App
