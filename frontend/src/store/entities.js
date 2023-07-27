import { combineReducers } from "redux";
import {listingReducer} from './listings.js';
import {reservationReducer} from "./reservations";

export const entitiesReducer = combineReducers({
    listings: listingReducer,
    reservations: reservationReducer
})