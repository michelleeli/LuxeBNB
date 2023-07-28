import { useDispatch } from "react-redux"
import { csrfFetch } from "./csrf"

export const ADD_LISTING = 'listings/ADD_LISTING'
export const ADD_LISTINGS = 'listings/ADD_LISTINGS'
export const REMOVE_LISTING = 'listings/REMOVE_LISTING'

export const addListing = (listing) => ({
    type: ADD_LISTING,
    listing
})

export const addListings = (listings) => ({
    type: ADD_LISTINGS,
    listings
})

export const removeListing = (listingId) => ({
    type: REMOVE_LISTING,
    listingId
})

export const fetchListings = () => async dispatch => {
    const res = await csrfFetch('/api/listings')
    if (res.ok) {
        const data = await res.json()
        dispatch(addListings(data))
    } else {
        console.log('no')
    }
}

export const fetchListing = (listingId) => async dispatch => {
    const res = await csrfFetch(`/api/listings/${listingId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(addListing(data))
    }
}

export const createListing = (listing) => async dispatch => {
    const res = await csrfFetch('/api/listings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(listing)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addListing(data))
    }
}


export const listingReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case ADD_LISTINGS:
            newState = {...state, ...action.listings}
            return newState
        case ADD_LISTING: 
            newState = {...state, ...action.listing.listing}
            return newState
        case REMOVE_LISTING:
            delete(newState[action.listingId])
            return newState
        default:
            return state
    }
} 

export default listingReducer