import { fetchListing } from "../../store/listings"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"


export const ReservationIndexItem = ({reservation}) => {
    const dispatch = useDispatch()
    const listing = useSelector((state) => state.entities.listings[reservation.listingId])

    console.log(listing)
    useEffect(()=>{
        dispatch(fetchListing(reservation.listingId))
    }, [reservation.listingId])


    return(
        <>
        {reservation && listing && (
        <div class="upcomingDiv">
            <div class="upcomingDescription">
                <h2 id="city">{listing.city}</h2>
                <span id="hostedBy">Hosted by {listing.host}</span>
                <hr id="upcomingHr"/>
                <div class="dateAddress">
                    <p id="startDate">{reservation.startDate}</p>
                    {/* <p>End Date: {reservation.endDate}</p> */}
                    <p>{listing.address} {listing.city}, {listing.state}</p>
                </div>
            </div>
            <img class="reservationImg" src="https://wallpapers.com/images/high/aesthetic-glass-mansion-lgs04s3xlfg1iwat.webp"></img>
        </div>
        )}

        </>
    )
}