import './ReviewForm.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview, fetchReviews } from '../../store/reviews'
import { updateReview } from '../../store/reviews'
import { useEffect } from 'react'
import { getReview } from '../../store/reviews'

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

    useEffect(()=> {
        dispatch(fetchReviews())
    }, [])

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

    const cleanCaption = () => {
        if (cleanliness === 0) {
            return "Make a selection"
        } else {
            return cleanliness.toString() + " stars"
        }
    }    
    
    const accCaption = () => {
        if (accuracy === 0) {
            return "Make a selection"
        } else {
            return accuracy.toString() + " stars"
        }
    }    

    const commCaption = () => {
        if (communication === 0) {
            return "Make a selection"
        } else {
            return communication.toString() + " stars"
        }
    }   

    const checkinCaption = () => {
        if (checkin === 0) {
            return "Make a selection"
        } else {
            return checkin.toString() + " stars"
        }
    }   

    const locCaption = () => {
        if (location === 0) {
            return "Make a selection"
        } else {
            return location.toString() + " stars"
        }
    }
    
    const valCaption = () => {
        if (value === 0) {
            return "Make a selection"
        } else {
            return value.toString() + " stars"
        }
    }

    const ratingCaption = () => {
        if (rating === 0) {
            return "Make a selection"
        } else if (rating === 1) {
            return "Terrible"
        } else if (rating === 2) {
            return "Bad"
        } else if (rating === 3) {
            return "Ok"
        } else if (rating === 4) {
            return "Good"
        } else if (rating === 5) {
            return "Great"
        }
    }


    const createQuestions = (factor, set) => {
        return (
            <div id={factor}> 
                    <input type="radio" name={factor} id={`${factor}1`} required value={1} onClick={()=> set(1)}/>
                    <label for={`${factor}1`} className="fas fa-star"></label>  
                    
                    <input id={`${factor}2`} type="radio" name={factor} value={2} onClick={()=> set(2)}/>
                    <label for={`${factor}2`} className="fas fa-star"></label>    
                
                    <input type="radio" id={`${factor}3`} name={factor} value={3} onClick={()=> set(3)}/>
                    <label className="fas fa-star" for={`${factor}3`}></label>               

                    <input type="radio" name={factor} id={`${factor}4`} value={4} onClick={()=> set(4)}/>
                    <label className="fas fa-star" for={`${factor}4`}> </label>    

                    <input type="radio"id={`${factor}5`} name={factor} value={5} onClick={()=> set(5)}/>
                    <label for={`${factor}5`} className="fas fa-star"></label>
            </div>
        )
    }

    const submitReview = (e) => {
        e.preventDefault()
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
        document.elementFromPoint(10, 10).click();
    }
    
    return (
        <form className="reviewForm" onSubmit={submitReview}>
                <div id='rating'> 
                    <h4>How was your stay?</h4>
                    <div>{ratingCaption()}</div>
                        <input type="radio" name="rating" id="rating1" required value={1} onClick={()=> setRating(1)}/>
                    <label for="rating1" className="fas fa-star"></label>               
                        <input  type="radio" name="rating" id="rating2" value={2} onClick={()=> setRating(2)}/>
                    <label for="rating2" className="fas fa-star"></label>  

                        <input type="radio" name="rating" id="rating3" value={3} onClick={()=> setRating(3)}/>
                    <label for="rating3" className="fas fa-star"></label > 
                                  
                        <input type="radio" name="rating" id="rating4" value={4} onClick={()=> setRating(4)}/>
                    <label  for="rating4" className="fas fa-star"></label>  
                                 
                        <input type="radio" id="rating5" name="rating" value={5} onClick={()=> setRating(5)}/>
                    <label for="rating5" className="fas fa-star"></label >
                </div>
                <div className='rating' >
                <h4>Cleanliness</h4>
                <div>{cleanCaption()} </div>
                    {createQuestions("Cleanliness", setCleanliness)}
                </div>
                <div className='rating'>
                <h4>Accuracy</h4>
                <div>{accCaption()} </div>
                {createQuestions("Accuracy", setAccuracy)}
                </div>
                <div className='rating'>
                <h4>Location</h4>
                <div>{locCaption()} </div>
                {createQuestions("Location", setLocation)}
                </div>
                <div className='rating'>
                <h4>Communication</h4>
                <div>{commCaption()} </div>
                {createQuestions("Communication", setCommunication)}
                </div>
                <div className='rating'>
                <h4>Check-in</h4>
                <div>{checkinCaption()} </div>
                {createQuestions("Check-in", setCheckin)}
                </div>
                <div className='rating'>
                <h4>Value</h4>
                <div>{valCaption()} </div>
                {createQuestions("Value", setValue)}
                </div>
                <div>
                    <h4>Tell us about your experience:</h4>
                    <textarea id="body" value= {body} required onChange={submitBody}/>
                </div>
                <br/>
                <input type="submit" className="submit" value="Submit"/>
        </form>
    )
}