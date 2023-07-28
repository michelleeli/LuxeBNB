import './ReviewForm.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview } from '../../store/reviews'

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

    const submitBody = (e) => {
        e.preventDefault()
        setBody(e.target.value)
    }

    const createQuestions = (factor, set) => {
        return (
            <div id={factor}> 
                <div>{factor}</div>
                <label>Terrible
                    <input type="radio" name={factor} value={1} onClick={()=> set(1)}/>
                </label>               
                <label>Bad
                    <input type="radio" name={factor} value={2} onClick={()=> set(2)}/>
                </label>               
                <label>OK
                    <input type="radio" name={factor} value={3} onClick={()=> set(3)}/>
                </label>               
                <label>Good
                    <input type="radio" name={factor} value={4} onClick={()=> set(4)}/>
                </label>               
                <label>Great
                    <input type="radio" name={factor} value={5} onClick={()=> set(5)}/>
                </label>
            </div>
        )
    }

    const submitReview = () => {
        dispatch(createReview({body: body, 
            cleanliness: cleanliness, 
            communication:communication, 
            check_in: checkin, 
            accuracy: accuracy, 
            location:location, 
            value:value, 
            rating: rating, 
            user_id:currentUser.id, 
            listing_id:reservation.listing_id}))
    }
    
    return (
        <form className="reviewForm" onSubmit={submitReview}>
            <div id="rating"> 
                <div>How was your stay?</div>
                <label>Terrible
                    <input type="radio" name="rating" value={1} onClick={()=> setRating(1)}/>
                </label>               
                <label>Bad
                    <input type="radio" name="rating" value={2} onClick={()=> setRating(2)}/>
                </label>               
                <label>OK
                    <input type="radio" name="rating" value={3} onClick={()=> setRating(3)}/>
                </label>               
                <label>Good
                    <input type="radio" name="rating" value={4} onClick={()=> setRating(4)}/>
                </label>               
                <label>Great
                    <input type="radio" name="rating" value={5} onClick={()=> setRating(5)}/>
                </label>
            </div>
            {createQuestions("Cleanliness", setCleanliness)}
            {createQuestions("Accuracy", setAccuracy)}
            {createQuestions("Location", setLocation)}
            {createQuestions("Communication", setCommunication)}
            {createQuestions("Check in", setCheckin)}
            {createQuestions("Value", setValue)}
            <label>Write a review
                <input type="text" onChange={submitBody}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}