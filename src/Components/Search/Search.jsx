
const Search = ({setSearchValue,searchValue}) =>{
    const onSearch = (value) => {
        setSearchValue(value);
        console.log(searchValue)
    }
    return(
        <div className="container-search">
            <input 
            className="search"
            placeholder=""
            value={searchValue}
            onChange={(event => onSearch(event.target.value))}/>

        </div>
    )
}

export {Search};