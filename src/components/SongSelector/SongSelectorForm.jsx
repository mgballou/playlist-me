


function SongSelectorForm({formData, handleFormChange}){

    // const songList = props.songs.map((s, idx) => 
    //     <SongInput key={idx} song={s} index={idx} songs={props.songs} setSongs={props.setSongs}/>

    // )

   
    

    return (
        <>
        <form>
        <label>Song 1</label>
        <input name="song1" value={formData.song1} onChange={handleFormChange}/>
        <label>Song 2</label>
        <input name="song2" value={formData.song2} onChange={handleFormChange}/>
        <label>Song 3</label>
        <input name="song3" value={formData.song3} onChange={handleFormChange}/>
        <label>Song 4</label>
        <input name="song4" value={formData.song4} onChange={handleFormChange}/>
        <label>Song 5</label>
        <input name="song5" value={formData.song5} onChange={handleFormChange}/>
        
      </form>
        
        </>
    )
}

export default SongSelectorForm