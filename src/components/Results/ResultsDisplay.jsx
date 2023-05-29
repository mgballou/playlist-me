
import TrackNode from "../TrackNode/TrackNode"



function ResultsDisplay ({resultsData, resetAll}) {
    const resultsNodeList = resultsData?.map((result, idx) => 
        <TrackNode 
        key={idx} 
        tName={result.tName}
        tArtist={result.tArtist}
        tLink={result.tLink}
        albumArtwork={result.albumArtwork}
        index={idx}
        />

    )

  


    return (
        <div className="one-half column flex-parent panel">
            <h4>Results</h4>
            {resultsNodeList ? <div className=" flex-parent overflow-scroll u-full-width">
            {resultsNodeList}

            </div> : <></> }
            <button onClick={resetAll}>Start Over</button>
            
        </div>
    )
}

export default ResultsDisplay