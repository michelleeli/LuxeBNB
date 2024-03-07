import { fetchListing } from "../../store/listings"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { deleteReservation } from "../../store/reservations"
import ReviewForm from "../Reviews/ReviewForm"
import { Modal } from "../../context/Modal"
import { deleteReview, getReview } from "../../store/reviews"
import { useHistory } from "react-router-dom";
import Calendar from "../Calendar"

export const ReservationIndexItem = ({reservation}) => {
    const dispatch = useDispatch()
    const listing = useSelector((state) => state.entities.listings[reservation.listingId])
    const future = (new Date(reservation.startDate) > new Date ())
    const [openReview, setOpenReview] = useState(false)
    const currentUserId = useSelector(state => state.session.user)?.id
    const [reviewType, setReviewType] = useState("Create")
    const [showEditModal, setShowEditModal] = useState(false)
    const review = useSelector(getReview(reservation.listingId, currentUserId))
    const history = useHistory()

    useEffect(()=> {
        if (review) {
            setReviewType("Update")
        }
    }, [review])


    useEffect(()=>{
        dispatch(fetchListing(reservation.listingId))
    }, [reservation.listing_id])

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

    const convertDate = (date) => {
        const newDate = new Date(date.replace(/-/g, '\/'))
        return newDate.toDateString().slice(4);
    }
    
    return(
        <>
        {future && 
            <>
                <button id="cancel" onClick={deleteRes}>Cancel reservation</button>
                <button id="cancel" onClick={()=> setShowEditModal(true)}>Update reservation</button>
            </>
        }
        {showEditModal && 
            <Modal onClose={()=>setShowEditModal(false)}>
                <h2>Edit Reservation</h2>
                <button id="close" onClick={()=> setShowEditModal(false)}>Close</button>
                <div id="editModal">
                    <div id ="editModalImage">
                        <img class= "reservation-photo" src={listing.photoUrl}/>
                        <h3>Reservation Details</h3>
                            <p><b>{listing.title}</b></p>
                            <p>{listing.address} {listing.city}</p> 
                            <hr/>
                            <p><b>Check In:</b> {(new Date(reservation.startDate.replace(/-/g, '\/'))).toDateString().slice(4)}</p>
                            <p><b>Check Out:</b> {(new Date(reservation.endDate.replace(/-/g, '\/'))).toDateString().slice(4)}</p>
                            <p><b>Number of Guests:</b> {reservation.guests}</p>
                    </div>
                    <Calendar listing={listing} reservation={reservation} closeModal={()=> setShowEditModal(false)}/>
                </div>
            </Modal>
        }
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
                    <p id="startDate">{convertDate(reservation.startDate)}</p>
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