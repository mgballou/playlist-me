function ResultNode({index, tName, tArtist, tLink}){
    

    return (
        <div>
            <p>Result # {index +1}: {tName} by {tArtist}</p>
            <a href={tLink}>On Spotify</a>
        </div>
    )
}

export default ResultNode