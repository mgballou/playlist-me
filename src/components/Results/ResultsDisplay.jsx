import ResultNode from "./ResultNode"



function ResultsDisplay ({resultsData}) {
    const resultsNodeList = resultsData.map((result, idx) => 
        <ResultNode 
        key={idx} 
        tName={result.tName}
        tArtist={result.tArtist}
        tLink={result.tLink}
        index={idx}
        />

    )
    return (
        <div>
            {resultsNodeList}
            
        </div>
    )
}

export default ResultsDisplay