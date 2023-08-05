import { ReviewIndexItem } from "./ReviewIndexItem"

export default function ReviewIndex({reviews}) {
    console.log(reviews)
    return (
        <>
        <div className="Reviews">
            {reviews?.map((review) => <ReviewIndexItem key={`${review.id}`} review={review}/>)}
        </div>
        </>
    )
}
