import { useHistory } from "react-router-dom";
import './ListingIndex.css'

export const ListingIndexItem = ({listing}) => {
    const history = useHistory();
    console.log(listing)

    const handleClick = () => {
        history.push(`/listings/${listing.id}`)
    }

     return (
        <div className="ListingItem" onClick={handleClick}>
            <img class="indexImg" src={listing?.photoUrl}></img>
            <h3 id="listingCaption">{listing?.city}, {listing?.state} 
                <span >
                     {listing?.avgRating? `★ ${listing.avgRating.toFixed(1)}`: ""}
                </span>
            </h3>
            <p id="indexPrice">$ <b>{listing?.price.toLocaleString()}</b> night</p>
        </div>
     )
}