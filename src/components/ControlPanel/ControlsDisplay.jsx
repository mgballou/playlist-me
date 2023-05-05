import SearchForm from "./SearchForm";
import TrackNode from "../TrackNode/TrackNode";

import { useState } from "react";

function ControlsDisplay({ addQuery, handleSearch, searchData, formData, setFormData, addSelection, clearSearch }) {
    const [songCount, setSongCount] = useState(0)


    
    
    function handleSelection(evt){
        
        let songId = evt.target.value
      
        addSelection(songId)
        setSongCount(songCount+1)
        console.log(songCount)
        clearSearch()
    }



    const searchResultsList = searchData?.map((result, idx) => {
        return (
            <button
            className="u-max-full-width"
            key={idx}
            onClick={handleSelection}
            index={idx}
            value={result.id}
            >
               {`# ${idx +1}: ${result.name} by ${result.artists[0].name}`}
            </button>
            
        )

    }


    )


    return (
        
        <div className="one-half column flex-parent panel">
            <h4>Controls</h4>
            {songCount <5 ? <SearchForm 
            addQuery={addQuery} 
            handleSearch={handleSearch} 
            searchData={searchData} 
            formData={formData} 
            setFormData={setFormData} 
            />: <></>}
            
            {searchResultsList ? <div className=" flex-parent overflow-scroll">
            {searchResultsList}

            </div> : <></> }
            

        </div>

    
    )
}

export default ControlsDisplay