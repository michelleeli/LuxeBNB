import { combineReducers } from "redux";
import {listingReducer} from './listings.js';
import {reservationReducer} from "./reservations";
import reviewReducer from "./reviews.js";

export const entitiesReducer = combineReducers({
    listings: listingReducer,
    reservations: reservationReducer,
    reviews: reviewReducer
})