import { useHistory } from "react-router-dom";

const ExploreItem = ({listing}) => {
    
    const history = useHistory()

    const redirect = () => {
        history.push(`/listings/${listing.id}`)
    }

    const browse = () => {
        history.push(`/`)
    }

    return (
        <div>
            {listing && 
                    <div onClick={redirect}>
                        <img id="exploreimg" src={listing.photoUrl} />
                        <div id="exploreTitle">{listing.title}</div>
                        <div id="exploreCaption">{listing.city}</div>
                        <div id="exploreCaption">{listing.country}</div>
                    </div>
            }
        </div>
    )
}

export default ExploreItem;