import { useEffect } from "react";
import ListingIndex from "../ListingIndex/ListingIndex";
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings } from "../../store/listings";
import { fetchLikes } from "../../store/likes";
import { useHistory } from "react-router-dom";


export default function Wishlist() {
    const dispatch = useDispatch()
    const listings = useSelector(state => Object.values(state.entities.listings))
    const likes = useSelector(state => Object.values(state.entities.likes))
    const currentUser = useSelector((state) => state.session.user)
    const history = useHistory()
    
    if (!currentUser) {
        history.push('/')
    }

    const likedIds = []
    likes.forEach(like => {
        likedIds.push(like.listingId)
    })
    const likedListings = listings.filter(listing => likedIds.includes(listing.id))

    useEffect(()=> {
        dispatch(fetchLikes())
        dispatch(fetchListings())
    }, [])

    return(
        <div>
            {listings && likes && (
            <>
            <h1 id="wishlist">My Wishlist</h1>
            <ListingIndex listings={likedListings}/>
            </>
            )
            }
        </div>
    )
}