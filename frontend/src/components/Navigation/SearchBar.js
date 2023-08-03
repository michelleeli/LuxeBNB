import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearSearchResults, fetchSearchResults } from "../../store/search"
import { useHistory } from 'react-router-dom/';

export default function SearchBar () {
    const [searchText, setSearchText] = useState()
    const dispatch = useDispatch()
    const [timer, setTimer] = useState(0)
    const searchResults = useSelector((state) => Object.values(state.entities.search))
    const history = useHistory()
    
    function handleSearch(e) {
        const query = e.target.value
        setSearchText(query)
        clearTimeout(timer);

        if (query.trim() !== "") {
            setTimer(setTimeout(() =>dispatch(fetchSearchResults(query)), 300));
        } else {
            dispatch(clearSearchResults)
        }
    }

    function handleClick(id) {
        return (e) => {
            e.preventDefault();
            history.push(`/listings/${id}`)
            dispatch(clearSearchResults())
            setSearchText("")
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (searchText.trim() !== "") {
            history.push(`/search?query=${searchText}`)
            dispatch(clearSearchResults())
            setSearchText("")
        }
    }

    return (
        <div className="searchbar-container">
            <input type="text" id="search-input" placeholder='Search destinations' value={searchText} onChange={handleSearch}/>
            <i onClick={handleSubmit} id="searchButton" className="fa-solid fa-magnifying-glass fa-xs" style={{color: "#ffffff",}}/>
            {searchText && searchResults && 
                <ul id="search-dropdown">
                    {searchResults.map(result => {
                        return <li className="search-dropdown-item" onClick={handleClick(result.id)}>
                            <i id="locationSearch" className="fa-solid fa-location-dot" style={{color: "#ec4c5f",}}/>
                            {result.title}
                        </li>
                    })}
                </ul>
            }
        </div>
    )
}