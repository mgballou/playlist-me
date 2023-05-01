function TrackNode({index, tName, tArtist, tLink}){
    

    return (
        <div>
            <p># {index +1}: {tName} by {tArtist}</p>
            <a href={tLink}>On Spotify</a>
        </div>
    )
}

export default TrackNode