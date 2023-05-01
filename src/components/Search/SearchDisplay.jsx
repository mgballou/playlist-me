import SearchForm from "./SearchForm";

function SearchDisplay({addQuery, handleSearch, searchData}){

    return (
        <>
        <SearchForm addQuery={addQuery} handleSearch={handleSearch} searchData={searchData}/>

        </>
    )
}

export default SearchDisplay