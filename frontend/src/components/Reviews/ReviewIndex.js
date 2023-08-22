import { ReviewIndexItem } from "./ReviewIndexItem"

export default function ReviewIndex({reviews}) {
    return (
        <>
        <div className="Reviews">
            {reviews?.map((review) => <ReviewIndexItem key={`${review.id}`} review={review}/>)}
        </div>
        </>
    )
}
