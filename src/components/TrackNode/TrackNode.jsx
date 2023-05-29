function TrackNode({ index, tName, tArtist, tLink, albumArtwork }) {

    


    return (

        <div className="track-node row">
            
            <div className="one-half column">
                
            <img className="album-artwork"
                src={albumArtwork}
                />
            </div>

            <div className="one-half column text-centered">
                <p>
                    {tName}
                </p>

                <p>
                {tArtist}
                </p>
            <a href={tLink} target="_blank" className="button reduce-padding" index={index}>
                Listen on Spotify


            </a>


            </div>


        </div>

    )
}

export default TrackNode