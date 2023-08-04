import { combineReducers } from "redux";
import likeReducer from "./likes.js";
import {listingReducer} from './listings.js';
import {reservationReducer} from "./reservations";
import reviewReducer from "./reviews.js";
import searchReducer from "./search.js";

export const entitiesReducer = combineReducers({
    listings: listingReducer,
    reservations: reservationReducer,
    reviews: reviewReducer,
    search: searchReducer,
    likes: likeReducer
})