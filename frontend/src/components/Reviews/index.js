import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ReviewIndex from "./ReviewIndex";
import './reviews.css'

export default function ReviewIndexPage({listingId}) {
    const reviewIds = useSelector((state)=> state.entities.listings[listingId].reviewIds)
    const allReviews = useSelector(state => state.entities.reviews)
    const reviews = reviewIds?.map(id=> allReviews[id])
    const [factorShow, setFactorShow] = useState(false)
    const listing = useSelector((state) => state.entities.listings[listingId])

    useEffect(()=> {
        if (reviews?.length >= 3) {
            setFactorShow(true)
        }
    }, [reviews])

    const formatNum = (string) => {
        return parseInt(string)
    }

    // const avgClean = () => {
    //     let sum = 0
    //     let num = reviews.length
    //     reviews.forEach(review => {
    //         sum += review.cleanliness
    //     })
    //     return (sum/ num).toFixed(1)
    // }

    // const avgAccuracy = () => {
    //     let sum = 0
    //     let num = reviews.length
    //     reviews.forEach(review => {
    //         sum += review.accuracy
    //     })
    //     return (sum/ num).toFixed(1)
    // }

    // const avgComm = () => {
    //     let sum = 0
    //     let num = reviews.length
    //     reviews.forEach(review => {
    //         sum += review.communication
    //     })
    //     return (sum/ num).toFixed(1)
    // }

    // const avgLocation = () => {
    //     let sum = 0
    //     let num = reviews.length
    //     reviews.forEach(review => {
    //         sum += review.location
    //     })
    //     return (sum/ num).toFixed(1)
    // }

    // const avgCheckin = () => {
    //     let sum = 0
    //     let num = reviews.length
    //     reviews.forEach(review => {
    //         sum += review.checkIn
    //     })
    //     return (sum/ num).toFixed(1)
    // }

    // const avgVal = () => {
    //     let sum = 0
    //     let num = reviews.length
    //     reviews.forEach(review => {
    //         sum += review.value
    //     })
    //     return (sum/ num).toFixed(1)
    // }


    // const avgRating = () => {
    //     let sum = 0
    //     let num = reviews.length
    //     if (reviews.length === 0) {
    //         return ""
    //     }
    //     reviews.forEach(review => {
    //         sum += review.rating
    //     })
    //     if (sum/num === 5) {
    //         return (sum/ num).toFixed(1)
    //     } else {
    //         return (sum / num).toFixed(2)
    //     }
    // }

    return (
        <div className="review">
            <hr/>
            <br/>
            <h3> <i className="fa-solid fa-star"/> 
                {listing.avgRating?.toFixed(2)}
                <span> • {reviews?.length} reviews</span> </h3>
            {!factorShow && (<div> Average rating will appear after 3 reviews </div>)}
            {factorShow && (<div className="reviewVis">
                <div className="factor">
                    <div>Cleanliness</div>
                    <div>
                        <progress max="5" value={listing.avgClean}></progress>
                        <span>{listing.avgClean}</span>
                    </div>
                </div>
                <div className="factor">
                    <div>Accuracy</div> 
                    <div>
                        <progress max="5" value={listing.avgAcc}></progress>
                        <span>{listing.avgAcc}</span>
                    </div>
                </div>
                <div className="factor">
                    <div>Communication</div> 
                    <div>
                        <progress max="5" value={listing.avgComm}></progress>
                        <span>{listing.avgComm}</span>
                    </div>
                </div>
                <div className="factor">
                    <div>Location</div> 
                    <div>
                        <progress max="5" value={listing.avgLoc}></progress>
                        <span>{listing.avgLoc}</span>
                    </div>
                </div>
                <div className="factor">
                    <div>Check-in</div>
                    <div>
                        <progress max="5" value={listing.avgCheckin}></progress>
                        <span>{listing.avgCheckin}</span>
                    </div>
                </div>
                <div className="factor">
                    <div>Value</div> 
                    <div>
                        <progress max="5" value={listing.avgVal}></progress>
                        <span>{listing.avgVal}</span>
                    </div>
                </div>
            </div>)}
            <ReviewIndex reviews={reviews}/>
        </div>
    )
}
