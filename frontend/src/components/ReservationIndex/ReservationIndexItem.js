import { fetchListing } from "../../store/listings"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { deleteReservation } from "../../store/reservations"
import ReviewForm from "../Reviews/ReviewForm"
import { Modal } from "../../context/Modal"
import { deleteReview, getReview } from "../../store/reviews"
import { useHistory } from "react-router-dom";

export const ReservationIndexItem = ({reservation}) => {
    const dispatch = useDispatch()
    const listing = useSelector((state) => state.entities.listings[reservation.listingId])
    console.log(listing)

    const future = (new Date(reservation.startDate) > new Date ())
    const [openReview, setOpenReview] = useState(false)
    const currentUserId = useSelector(state => state.session.user).id
    const [reviewType, setReviewType] = useState("Create")
    const review = useSelector(getReview(reservation.listingId, currentUserId))
    const history = useHistory()

    useEffect(()=> {
        if (review) {
            setReviewType("Update")
        }
    }, [review])


    useEffect(()=>{
        dispatch(fetchListing(reservation.listingId))
    }, [reservation.listingId])

    const deleteRes = () => {
        if (reservation) {
            dispatch(deleteReservation(reservation.id))
        }
    }

    const openReviewForm = () => {
        setOpenReview(true)
    }

    const deleteRev = () => {
        if (review) {
            dispatch(deleteReview(review.id))
            setReviewType("Create")
        }
    }

    const showListing = () => {
        history.push(`/listings/${listing.id}`)
    }
    
    return(
        <>
        {future && (<button id="cancel" onClick={deleteRes}>Cancel reservation</button>)}
        {!future && (<button id="cancel" onClick={openReviewForm}>{reviewType === "Create" ? "Write a review" : "Update review" }</button>)}
        {!future && reviewType === "Update" && <button id="cancel" onClick={deleteRev}>Delete Review</button>}
        {openReview && (
            <Modal onClose={() => setOpenReview(false)}>
                <ReviewForm reservation={reservation}/>
            </Modal>
        )}
        
        {reservation && listing && (
            <>
        <div className="upcomingDiv" onClick={showListing}>
            <div className="upcomingDescription">
                <h2 id="city">{listing.city}</h2>
                <span id="hostedBy">Hosted by {listing.host}</span>
                <hr id="upcomingHr"/>
                <div className="dateAddress">
                    <p id="startDate">{reservation.startDate}</p>
                    <p id="address">{listing.address} {listing.city}, {listing.state}</p>
                </div>
            </div>
            <img className="reservationImg" src={listing.photoUrl}></img>
       
        </div>
        </>
        )}

        </>
    )
}