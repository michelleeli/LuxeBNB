export const ReviewIndexItem = ({review}) => {

     return (
        <div className="ReviewItem" >
            <div>{review.user}</div>
            <div id="caption">{new Date(review.createdAt).toUTCString().slice(5,16)}</div>
            <div id="body">{review.body}</div>
        </div>
     )
}