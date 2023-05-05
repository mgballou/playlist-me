import { useState } from 'react'


function SongSearchForm({ addQuery, handleSearch, formData, setFormData }) {

  // const songList = props.songs.map((s, idx) => 
  //     <SongInput key={idx} song={s} index={idx} songs={props.songs} setSongs={props.setSongs}/>

  // )



  function handleFormChange(evt) {
    const newFormData = evt.target.value
    setFormData(newFormData)
    addQuery(formData)
  }


  return (
    
      <form className="flex-parent" onSubmit={handleSearch}>
        <input 
        type="search" 
        name="song" 
        value={formData} 
        onChange={handleFormChange} 
        placeholder="find tracks..."
        />
        <button type="submit">Search</button>

      </form>

    
  )
}

export default SongSearchForm