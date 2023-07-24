import { useHistory } from "react-router-dom";
import './ListingIndex.css'

export const ListingIndexItem = ({listing}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/listings/${listing.id}`)
    }

     return (
        <div className="ListingItem" onClick={handleClick}>
            <h4>{listing.city}, {listing.state}</h4>
            <p>$ <b>{listing.price}</b> night</p>
        </div>
     )
}