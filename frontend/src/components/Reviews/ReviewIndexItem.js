import Avatar, { genConfig } from 'react-nice-avatar'
export const ReviewIndexItem = ({review}) => {
    const config = genConfig() 

     return (
        <div className="ReviewItem" >
            <div id="reviewer">
                <Avatar style={{ width: '3rem', height: '3rem' }} {...config} />
                <div>
                    <span id="name">{review.user}</span>
                    <div id="caption">{new Date(review.createdAt).toUTCString().slice(7,16)}</div>
                </div>
            </div>
            <div id="bodyReview">{review.body}</div>
        </div>
     )
}