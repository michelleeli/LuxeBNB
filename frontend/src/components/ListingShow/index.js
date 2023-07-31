import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchListing } from "../../store/listings"
import './ListingShow.css'
import Calendar from "../Calendar"
import ReviewIndexPage from "../Reviews"
import MapContainer from "../Map"

export default function ListingShowPage() {
    const dispatch = useDispatch()
    const listingId = useParams().listingId
    const listing = useSelector((state) => state.entities.listings[listingId])
    
    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

    return (
        <>
        {listing && (
            <div id="title">
                <h2>{listing.title}</h2>
                <h5>
                    <span> ★ {listing.avgRating?.toFixed(2)}</span>
                    <span><u>{listing.reviewIds?.length} reviews</u></span>
                    <span id="location">{listing.city}, {listing.state}</span>
                </h5>
                <img id="thumbnail" src={listing.photoUrl}></img>

            </div>
        )}
        <div class="ShowPage">
        {listing &&  (
        <div className="ListingShow">

            <p>Hosted by {listing.host}</p>
            <div className="numRooms">
                <span>{listing.maxGuests} guests</span>
                <span> • </span>
                <span>{listing.numBedroom} bedrooms</span>
                <span> • </span>
                <span>{listing.numBed} beds</span>
                <span> • </span>
                <span>{listing.numBath} bath</span>
            </div>
            <hr/>
            <div class="captionedIcons">
                {listing.selfCheckin && (<p> <i className="fa-solid fa-house-lock" style={{color: "#717171",}}/> Self check-in</p> )}
                <span id="caption">Check yourself in with the keypad.</span>
            </div>
            <hr/>
            <div id="description">{listing.description}</div>
            <hr/>
            <h3>What this place offers</h3>
            <div class="offers">
                {listing.wifi && 
                    (<p> <i className="fa-solid fa-wifi" style={{color: "#717171",}}/> Wifi</p> )
                }
                {listing.airCondition && 
                    (<p> <i className="fa-solid fa-snowflake" style={{color: "#717171",}}/> Air conditioning</p> )
                }
                {listing.pets && 
                    (<p> <i className="fa-solid fa-paw" style={{color: "#717171",}}/> Pets allowed </p> )
                }   
                {listing.tv && 
                    (<p> <i className="fa-solid fa-tv" style={{color: "#717171",}}/> TV </p> )
                }
                {listing.parking && 
                    (<p> <i className="fa-solid fa-car" style={{color: "#717171",}}/> Free parking on premise </p> )
                }
                {listing.washer && 
                    (<p> <i className="fa-solid fa-shirt" style={{color: "#717171",}}/> Washer and dryer </p> )
                }
                {listing.kitchen && 
                    (<p> <i className="fa-solid fa-utensils" style={{color: "#717171",}}/> Kitchen </p> )
                }
            </div>
        </div>
        )}
        <Calendar listing={listing}/>
        </div>
        {listing && <ReviewIndexPage listingId={listing.id}/>}
        {/* <MapContainer/> */}
        </>
    )
}
 

