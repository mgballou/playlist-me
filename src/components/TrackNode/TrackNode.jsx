function TrackNode({ index, tName, tArtist, tLink, albumArtwork }) {

    console.log(albumArtwork)


    return (

        <div className="track-node flex-parent">
            <img className="album-artwork"
                src={albumArtwork}
                />
            <a href={tLink} target="_blank" className="button" index={index}>


                <span>
                    {`# ${index + 1}: ${tName} by ${tArtist}`}
                </span>
            </a>

        </div>

    )
}

export default TrackNode