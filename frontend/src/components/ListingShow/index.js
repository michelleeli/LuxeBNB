import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchListing } from "../../store/listings"
import './ListingShow.css'
import Calendar from "../Calendar"
import ReviewIndexPage from "../Reviews"
import MapWrapper from "../Map"
import Avatar, { genConfig } from 'react-nice-avatar'
import ImageCarousel from "../Carousel.js/carousel"
import { Modal } from '../../context/Modal';

export default function ListingShowPage() {
    const dispatch = useDispatch()
    const listingId = useParams().listingId
    const listing = useSelector((state) => state.entities.listings[listingId])
    const [showCarousel, setShowCarousel] = useState(false)
    const config = genConfig() 
    const [userAvatar, setUserAvatar] = useState()

    useEffect(()=> {
         setUserAvatar(<Avatar id="hostpfp" style={{ width: '3rem', height: '3rem' }} {...config} />)
    }, [])

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

    const openCarousel = () => {
        setShowCarousel(true)
    }

    const closeCarousel = () => {
        setShowCarousel(false)
    }

    return (
        <>
      {showCarousel && (<Modal id="imgModal" onClose={() => setShowCarousel(false)}>
        <button className="close" onClick={closeCarousel}>X</button>
          <ImageCarousel listing={listing} />
        </Modal>)}


        {listing && (
            <div id="title">
                <h2>{listing.title}</h2>
                <h5>
                    <span> ★ {listing.avgRating?.toFixed(2)}</span>
                    <span><u>{listing.reviewIds?.length} reviews</u></span>
                    <span id="location">{listing.city}, {listing.state}</span>
                </h5>
                <div className="showImages" onClick={openCarousel}>
                    <img id="thumbnail" src={listing.photoUrl}></img>
                    <div id="miniPics">
                        <img src={listing.photo2Url}></img>
                        <img id="two" src={listing.photo3Url}></img>
                        <img src={listing.photo4Url}></img>
                        <img id="four" src={listing.photo5Url}></img>
                    </div>
                </div>
                <button id="showCarousel" onClick={openCarousel}>
                    <i class="fa-solid fa-ellipsis-vertical" style={{color: "#434242",}}></i>
                    <i class="fa-solid fa-ellipsis-vertical" style={{color: "#434242",}}></i>
                    <i class="fa-solid fa-ellipsis-vertical" style={{color: "#434242",}}></i>
                    <span> Show all photos</span>
                </button>
            </div>
        )}
        <div class="ShowPage">
        {listing &&  (
        <div className="ListingShow">
            <div id="host" >
                <p>Hosted by {listing.host}</p>
                {userAvatar}
            </div>
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
        <div id="showPageMap">
            <hr/>
            <h3>Where you'll be </h3>
            <MapWrapper listings={[listing]} />
        </div>

        </>
    )
}
 

