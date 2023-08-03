import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchListings } from "../../store/listings";
import ListingIndex from '../ListingIndex/ListingIndex';
import { useParams } from "react-router-dom";
import FilterMenu from ".";

export default function FilteredRender() {
    const category = useParams().category
    const listings = useSelector(state => Object.values(state.entities.listings))
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchListings())
    }, [])

    const selected = (listings.filter(listing => listing.tags.includes(category)))
    
    return (
        <>
        <ListingIndex listings={selected}/>
        </>
    )
}