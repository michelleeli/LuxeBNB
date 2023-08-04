
import { csrfFetch } from "./csrf"

export const ADD_LIKE = 'likes/ADD_LIKE'
export const ADD_LIKES = 'likes/ADD_LIKES'
export const REMOVE_LIKE = 'likes/REMOVE_LIKE'

export const addLike = (like) => ({
    type: ADD_LIKE,
    like
})

export const addLikes = (likes) => ({
    type: ADD_LIKES,
    likes
})

export const removeLike = (likeId) => ({
    type: REMOVE_LIKE,
    likeId
})

export const getLike = (listingId, currentUserId) => (state) => {
    const like = Object.values(state.entities.likes).find(
      (like) => ((like.listingId === listingId) && (like.userId === currentUserId)
    ))
    return like;
};

export const fetchLikes = () => async dispatch => {
    const res = await csrfFetch('/api/likes')
    if (res.ok) {
        const data = await res.json()
        dispatch(addLikes(data))
    }
}

export const fetchLike = (likeId) => async dispatch => {
    const res = await csrfFetch(`/api/Likes/${likeId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(addLike(data))
    }
}

export const createLike = (like) => async dispatch => {
    const res = await csrfFetch('/api/likes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(like)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addLike(data))
    }
}

export const deleteLike = (likeId) => async dispatch => {
    const res = await csrfFetch(`/api/likes/${likeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok) {
        dispatch(removeLike(likeId))
    }
}

export const likeReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case ADD_LIKES:
            newState = {...state, ...action.likes}
            return newState
        case ADD_LIKE: 
            newState = {...state, ...action.like}
            return newState
        case REMOVE_LIKE:
            delete(newState[action.likeId])
            return newState
        default:
            return state
    }
} 

export default likeReducer;