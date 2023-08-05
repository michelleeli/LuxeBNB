
import { csrfFetch } from "./csrf"
import { ADD_LISTING } from "./listings"

export const ADD_REVIEW = 'reviews/ADD_REVIEW'
export const ADD_REVIEWS = 'reviews/ADD_REVIEWS'
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

export const addReview = (review) => ({
    type: ADD_REVIEW,
    review
})

export const addReviews = (reviews) => ({
    type: ADD_REVIEWS,
    reviews
})

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const getReview = (listingId, currentUserId) => (state) => {
    const review = Object.values(state.entities.reviews).find(
      (review) => ((review.listingId === listingId) && (review.userId === currentUserId)
    ))
    return review;
};

export const fetchReviews = () => async dispatch => {
    const res = await csrfFetch('/api/reviews')
    if (res.ok) {
        const data = await res.json()
        dispatch(addReviews(data))
    }
}

export const fetchReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(addReview(data))
    }
}

export const createReview = (review) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(review)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addReview(data))
    }
}

export const updateReview = (review) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(review)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addReview(data))
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok) {
        dispatch(removeReview(reviewId))
    }
}

export const reviewReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case ADD_REVIEWS:
            newState = {...state, ...action.reviews}
            return newState
        case ADD_LISTING:
            newState = {...state, ...action.listing.reviews}
            return newState;
        case ADD_REVIEW: 
            newState = {...state, ...action.review}
            return newState
        case REMOVE_REVIEW:
            delete(newState[action.reviewId])
            return newState
        default:
            return state
    }
} 

export default reviewReducer