import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { fetchSearchResults } from "../../store/search"
import ListingIndex from "../ListingIndex/ListingIndex"

export default function Search() {
    const dispatch = useDispatch()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("query")
    const searchResults = useSelector(state => state.entities.search)

    useEffect(()=> {
        if (query) {
            dispatch(fetchSearchResults(query))
        }
    }, [query])
    return (
        <div>
            <ListingIndex listings={Object.values(searchResults)}/>
        </div>
    )
}