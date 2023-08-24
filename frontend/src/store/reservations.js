import { csrfFetch } from "./csrf"
import { ADD_LISTING } from "./listings"

export const ADD_RESERVATION = 'reservations/ADD_RESERVATION'
export const ADD_RESERVATIONS = 'reservations/ADD_RESERVATIONS'
export const REMOVE_RESERVATION = 'reservations/REMOVE_RESERVATION'

export const addReservation = (reservation) => ({
    type: ADD_RESERVATION,
    reservation
})

export const addReservations = (reservations) => ({
    type: ADD_RESERVATIONS,
    reservations
})

export const removeReservation = (reservationId) => ({
    type:REMOVE_RESERVATION,
    reservationId
})


export const fetchReservations = () => async dispatch => {
    const res = await csrfFetch('/api/reservations')
    if (res.ok) {
        const data = await res.json()
        dispatch(addReservations(data))
    } 
}

export const fetchReservation = (reservationId) => async dispatch => {
    const res = await csrfFetch(`/api/reservations/${reservationId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(addReservation(data))
    }
}

export const createReservation = (reservation) => async dispatch => {
    const res = await csrfFetch('/api/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(reservation)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addReservation(data))
    }
}

export const updateReservation = (reservation) => async dispatch => {
    const res = await csrfFetch(`/api/reservations/${reservation.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(reservation)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addReservation(data))
    }
}

export const deleteReservation = (reservationId) => async dispatch => {
    const res = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok) {
        dispatch(removeReservation(reservationId))
    }
}


export const reservationReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case ADD_RESERVATIONS:
            newState = {...state, ...action.reservations}
            return newState
        case ADD_RESERVATION: 
            newState = {...state, ...action.reservation}
            return newState
        case ADD_LISTING:
            newState = {...state, ...action.listing.reservations}
            return newState;
        case REMOVE_RESERVATION:
            delete(newState[action.reservationId])
            return newState
        default:
            return state
    }
} 

export default reservationReducer;