import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchListing } from "../../store/listings"
import './ListingShow.css'
import Calendar from "../Calendar"

export default function ListingShowPage() {
    const dispatch = useDispatch()
    const listingId = useParams().listingId
    const listing = useSelector((state) => state.listings[listingId])
    
    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

    return (
        <>
        <div class="ShowPage">
        {listing &&  (
        <div className="ListingShow">
            <h2>{listing.title}</h2>
            <div>
            <p id="location">{listing.city}, {listing.state}</p>
            </div>
            <p>Hosted by {listing.hostId}</p>
            <div className="numRooms">
                <span>{listing.maxGuests} guests</span>
                <span> • </span>
                <span>{listing.numBedroom} bedrooms</span>
                <span> • </span>
                <span>{listing.numBed} beds</span>
                <span> • </span>
                <span>{listing.numBath} bath</span>
            </div>
            <hr/>
            <div id="description">{listing.description}</div>
            <hr/>
            <h3>What this place offers</h3>
        </div>
        )}
        <Calendar listing={listing}/>
        </div>
        </>
    )
}