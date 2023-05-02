import {useState} from 'react'


function SongSearchForm({addQuery, handleSearch, formData, setFormData}){

    // const songList = props.songs.map((s, idx) => 
    //     <SongInput key={idx} song={s} index={idx} songs={props.songs} setSongs={props.setSongs}/>

    // )

   

    function handleFormChange(evt) {
      const newFormData = evt.target.value
      setFormData(newFormData)
      addQuery(formData)
    }
    

    return (
        <>
        <form onSubmit={handleSearch}>
        <label>Song 1</label>
        <input name="song" value={formData} onChange={handleFormChange}/>
        <button type="submit">Search</button>
        
      </form>
        
        </>
    )
}

export default SongSearchForm