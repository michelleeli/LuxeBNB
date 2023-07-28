import { fetchListing } from "../../store/listings"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { deleteReservation } from "../../store/reservations"


export const ReservationIndexItem = ({reservation}) => {
    const dispatch = useDispatch()
    const listing = useSelector((state) => state.entities.listings[reservation.listingId])
    const future = (new Date(reservation.startDate) > new Date ())
    const [openReview, setOpenReview] = useState(false)

    useEffect(()=>{
        dispatch(fetchListing(reservation.listingId))
    }, [reservation.listingId])

    const deleteRes = () => {
        if (reservation) {
            dispatch(deleteReservation(reservation.id))
        }
    }



    return(
        <>
        {future && (<button id="cancel" onClick={deleteRes}>Cancel reservation</button>)}
        {!future && (<button> onClick={()=> setOpenReview(true)}Write Review</button>)}
        {reservation && listing && (
            <>
        <div class="upcomingDiv">
            <div class="upcomingDescription">
                <h2 id="city">{listing.city}</h2>
                <span id="hostedBy">Hosted by {listing.host}</span>
                <hr id="upcomingHr"/>
                <div class="dateAddress">
                    <p id="startDate">{reservation.startDate}</p>
                    <p>{listing.address} {listing.city}, {listing.state}</p>
                </div>
            </div>
            <img class="reservationImg" src="https://wallpapers.com/images/high/aesthetic-glass-mansion-lgs04s3xlfg1iwat.webp"></img>
       
        </div>
        </>
        )}

        </>
    )
}