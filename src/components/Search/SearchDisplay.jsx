import SearchForm from "./SearchForm";
import TrackNode from "../TrackNode/TrackNode";

function SearchDisplay({ addQuery, handleSearch, searchData, formData, setFormData, addSelection, clearSearch }) {
    function handleSelection(evt){
        
        let songId = evt.target.value
      
        addSelection(songId)
        clearSearch()
    }



    const searchResultsList = searchData?.map((result, idx) => {
        return (
            <button
            key={idx}
            onClick={handleSelection}
            index={idx}
            value={result.id}
            >
               # {idx +1}: {result.name} by {result.artists[0].name}
            </button>
        )

    }


    )


    return (
        <>
        {searchResultsList}
            <SearchForm addQuery={addQuery} handleSearch={handleSearch} searchData={searchData} formData={formData} setFormData={setFormData} />

        </>
    )
}

export default SearchDisplay