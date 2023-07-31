import './ReviewForm.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview } from '../../store/reviews'
import { updateReview } from '../../store/reviews'
import { useEffect } from 'react'
import { getReview } from '../../store/reviews'
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

export default function ReviewForm({reservation}) {
    const [rating, setRating] = useState(0)
    const [cleanliness, setCleanliness] = useState(0)
    const [accuracy, setAccuracy] = useState(0)
    const [location, setLocation] = useState(0)
    const [communication, setCommunication] = useState(0)
    const [checkin, setCheckin] = useState(0)
    const [value, setValue] = useState(0)
    const [body, setBody] = useState("")
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const [reviewType, setReviewType] = useState("Create")
    const review = useSelector(getReview(reservation.listingId, currentUser.id))
    const history = useHistory()

    useEffect(()=> {
        if (review) {
            setReviewType("Update")
            setCleanliness(review.cleanliness)
            setAccuracy(review.accuracy)
            setLocation(review.location)
            setCommunication(review.communication)
            setValue(review.value)
            setCheckin(review.checkIn)
            setBody(review.body)
            setRating(review.rating)
        }
    }, [review])

    const submitBody = (e) => {
        setBody(e.target.value)
    }

    let clean = document.querySelectorAll('#Cleanliness input')
    clean.forEach(input => {
        if (input.value == cleanliness) {
            input.checked = true;
        }
    })

    let acc = document.querySelectorAll('#Accuracy input')
    acc.forEach(input => {
        if (input.value == accuracy) {
            input.checked = true;
        }
    })

    let loc = document.querySelectorAll('#Location input')
    loc.forEach(input => {
        if (input.value == location) {
            input.checked = true;
        }
    })

    let check = document.querySelectorAll('#Check-in input')
    check.forEach(input => {
        if (input.value == checkin) {
            input.checked = true;
        }
    })

    let val = document.querySelectorAll('#Value input')
    val.forEach(input => {
        if (input.value == value) {
            input.checked = true;
        }
    })

    let comm = document.querySelectorAll('#Communication input')
    comm.forEach(input => {
        if (input.value == communication) {
            input.checked = true;
        }
    })

    let overall = document.querySelectorAll("#rating input")
    overall.forEach(input => {
        if (input.value == rating) {
            input.checked = true;
        }
    })

    const createQuestions = (factor, set) => {
        return (
            <div id={factor}> 
                <h4>{factor}</h4>
                <label className="fas fa-star">
                    <input type="radio" name={factor} required value={1} onClick={()=> set(1)}/>
                </label>               
                <label className="fas fa-star">
                    <input type="radio" name={factor} value={2} onClick={()=> set(2)}/>
                </label>               
                <label className="fas fa-star">
                    <input type="radio" name={factor} value={3} onClick={()=> set(3)}/>
                </label>               
                <label className="fas fa-star">
                    <input type="radio" name={factor} value={4} onClick={()=> set(4)}/>
                </label>               
                <label className="fas fa-star">
                    <input type="radio" name={factor} value={5} onClick={()=> set(5)}/>
                </label>
            </div>
        )
    }

    const submitReview = () => {
        if (reviewType === "Create") {
            dispatch(createReview({body: body, 
                cleanliness: cleanliness, 
                communication:communication, 
                check_in: checkin, 
                accuracy: accuracy, 
                location:location, 
                value:value, 
                rating: rating, 
                user_id:currentUser.id, 
                listing_id:reservation.listingId}))
            history.push("/reservations")
            }
        else {
            dispatch(updateReview({body: body, 
                cleanliness: cleanliness, 
                communication:communication, 
                check_in: checkin, 
                accuracy: accuracy, 
                location:location, 
                value:value, 
                rating: rating, 
                user_id:currentUser.id, 
                listing_id:reservation.listingId}))
        }        
    }
    
    return (
        <form className="reviewForm" onSubmit={submitReview}>
                <div id='rating'> 
                    <h4>How was your stay?</h4>
                    <label className="fas fa-star">
                        <input type="radio" name="rating" required value={1} onClick={()=> setRating(1)}/>
                    </label>               
                    <label className="fas fa-star">
                        <input type="radio" name="rating" value={2} onClick={()=> setRating(2)}/>
                    </label>               
                    <label className="fas fa-star">
                        <input type="radio" name="rating" value={3} onClick={()=> setRating(3)}/>
                    </label >               
                    <label className="fas fa-star">
                        <input type="radio" name="rating" value={4} onClick={()=> setRating(4)}/>
                    </label>               
                    <label className="fas fa-star">
                        <input type="radio" name="rating" value={5} onClick={()=> setRating(5)}/>
                    </label >
                </div>
                <div className='rating' >
                    {createQuestions("Cleanliness", setCleanliness)}
                </div>
                <div className='rating'>
                {createQuestions("Accuracy", setAccuracy)}
                </div>
                <div className='rating'>
                {createQuestions("Location", setLocation)}
                </div>
                <div className='rating'>
                {createQuestions("Communication", setCommunication)}
                </div>
                <div className='rating'>
                {createQuestions("Check-in", setCheckin)}
                </div>
                <div className='rating'>
                {createQuestions("Value", setValue)}
                </div>
                <div>
                    <h4>Write a review</h4>
                    <textarea id="body" value= {body} required onChange={submitBody}/>
                </div>
                <br/>
                <input type="submit" className="submit" value="Submit"/>
        </form>
    )
}