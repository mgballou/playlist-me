
import TrackNode from "../TrackNode/TrackNode"


function ResultsDisplay ({resultsData}) {
    const resultsNodeList = resultsData?.map((result, idx) => 
        <TrackNode 
        key={idx} 
        tName={result.tName}
        tArtist={result.tArtist}
        tLink={result.tLink}
        index={idx}
        />

    )
    return (
        <div>
            <h3>Results</h3>
            {resultsNodeList}
            
        </div>
    )
}

export default ResultsDisplay