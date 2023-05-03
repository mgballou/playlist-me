function TrackNode({index, tName, tArtist, tLink}){
    

    return (
            <p index={index}># {index +1}: {tName} by {tArtist}</p>

    )
}

export default TrackNode