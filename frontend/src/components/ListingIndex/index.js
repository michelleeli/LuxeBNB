import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchListings } from "../../store/listings";
import ListingIndex from './ListingIndex'

export default function ListingIndexPage() {
    const listings = useSelector((state) => Object.values(state.entities.listings))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    return (
        <div className="listingIndex">
            <ListingIndex listings={listings}/>
        </div>
    )
}