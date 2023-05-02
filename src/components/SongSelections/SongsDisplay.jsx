import { useState, useEffect } from "react"
import TrackNode from "../TrackNode/TrackNode"

function SongsDisplay({songSelections, authToken}){

    const [selectionsData, setSelectionsData] = useState(null)

    async function fetchSelectionData(){
        try {
            let selectionsString = songSelections.join(",")
            let url = 'https://api.spotify.com/v1/tracks/'

            let params = new URLSearchParams({
                ids: selectionsString,
                market: 'US',
        
              })
        
              let options = {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${authToken}` },
        
              }
        
              url = url + "?" + params.toString()
        
              let response = await fetch(url, options)
              let responseData = await response.json()
              setSelectionsData(responseData.tracks)
            

        } catch (err) {
            console.log(err)
            
        }
        
    }

    useEffect(() => { fetchSelectionData() }, [songSelections])

    const songsNodeList = selectionsData?.map((selectedSong, idx) => 
        <TrackNode 
        key={idx} 
        tName={selectedSong.name}
        tArtist={selectedSong.artists[0].name}
        tLink={selectedSong.href}
        index={idx}
        />

    )

    return (
        <div>
            Songs display
            {songsNodeList}
        </div>
    )
}

export default SongsDisplay