import { useHistory } from "react-router-dom";
import './ListingIndex.css'

export const ListingIndexItem = ({listing}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/listings/${listing.id}`)
    }

     return (
        <div className="ListingItem" onClick={handleClick}>
            <div className="showImage">image</div>
            <h3>{listing.city}, {listing.state}</h3>
            <p id="indexPrice">$ <b>{listing.price}</b> night</p>
        </div>
     )
}