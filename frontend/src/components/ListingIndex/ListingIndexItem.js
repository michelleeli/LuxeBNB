import { useHistory } from "react-router-dom";
import './ListingIndex.css'

export const ListingIndexItem = ({listing}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/listings/${listing.id}`)
    }

     return (
        <div className="ListingItem" onClick={handleClick}>
            <img class="indexImg" src="https://wallpapers.com/images/high/aesthetic-glass-mansion-lgs04s3xlfg1iwat.webp"></img>
            <h3>{listing.city}, {listing.state}</h3>
            <p id="indexPrice">$ <b>{listing.price}</b> night</p>
        </div>
     )
}