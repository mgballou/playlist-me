


function SongInput(props){

    function handleChangeSong(evt){
        const newSongs = props.songs.splice(props.index, 1, evt.target.value)
        console.log(newSongs)
        // props.setSongs(newSongs)

    }

    return (
        <input 
        type="text"
        value={props.song}
        onChange={handleChangeSong}
        >
        </input>
    )

}

export default SongInput