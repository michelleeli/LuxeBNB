import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ReviewIndex from "./ReviewIndex";
import './reviews.css'

export default function ReviewIndexPage({listingId}) {
    // const reviewIds = useSelector((state)=> state.entities.listings[listingId].reviewIds)
    const allReviews = useSelector(state => Object.values(state.entities.reviews))
    const reviews = allReviews.filter(review => review.listingId === listingId)
    // const reviews = reviewIds?.map(id=> allReviews[id])
    const [factorShow, setFactorShow] = useState(false)
    const listing = useSelector((state) => state.entities.listings[listingId])
    // const dispatch = useDispatch()
    
    useEffect(()=> {
        if (reviews.length >= 3) {
            setFactorShow(true)
        }
    }, [])

    // useEffect(()=> {
    //     dispatch(fetchReviews())
    // }, [listingId])

    return (
        <div className="review">
            <hr/>
            <br/>
            <h3> <i className="fa-solid fa-star"/> 
                {listing.avgRating?.toFixed(2)}
                <span> • {reviews?.length} reviews</span> </h3>
            {!factorShow && (<div id="three"> Average category ratings will appear after 3 reviews </div>)}
            {factorShow && (<div className="reviewVis">
                <div className="factor">
                    <div>Cleanliness</div>
                    <div>
                        <progress max="5" value={listing.avgClean}></progress>
                        <span>{listing.avgClean?.slice(0,3)}</span>
                    </div>
                </div>
                <div className="factor">
                    <div>Accuracy</div> 
                    <div>
                        <progress max="5" value={listing.avgAcc}></progress>
                        <span>{listing.avgAcc?.slice(0,3)}</span>
                    </div>
                </div>
                <div className="factor">
                    <div>Communication</div> 
                    <div>
                        <progress max="5" value={listing.avgComm}></progress>
                        <span>{listing.avgComm?.slice(0,3)}</span>
                    </div>
                </div>
                <div className="factor">
                    <div>Location</div> 
                    <div>
                        <progress max="5" value={listing.avgLoc}></progress>
                        <span>{listing.avgLoc?.slice(0,3)}</span>
                    </div>
                </div>
                <div className="factor">
                    <div>Check-in</div>
                    <div>
                        <progress max="5" value={listing.avgCheckin}></progress>
                        <span>{listing.avgCheckin?.slice(0,3)}</span>
                    </div>
                </div>
                <div className="factor">
                    <div>Value</div> 
                    <div>
                        <progress max="5" value={listing.avgVal}></progress>
                        <span>{listing.avgVal?.slice(0,3)}</span>
                    </div>
                </div>
            </div>)}
            <ReviewIndex reviews={reviews}/>
        </div>
    )
}
