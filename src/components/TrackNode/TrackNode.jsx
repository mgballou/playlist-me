function TrackNode({index, tName, tArtist, tLink}){
    

    return (
        <a href={tLink} target="_blank" className="track-node button" index={index}>{`# ${index +1}: ${tName} by ${tArtist}`}</a>

    )
}

export default TrackNode