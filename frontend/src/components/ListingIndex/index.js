import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchListings } from "../../store/listings";
import ListingIndex from './ListingIndex'
import { useState } from "react";
import MapWrapper from "../Map";
import FilterMenu from "../FilterMenu";

export default function ListingIndexPage() {
    const listings = useSelector((state) => Object.values(state.entities.listings))
    const dispatch = useDispatch();
    const[openMap, setOpenMap] = useState(false)

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    const showMap = () => {
        setOpenMap(true)
    }

    const showList = () => {
        setOpenMap(false)
    }

    return (
        <>
        {!openMap && (
            <>
            <FilterMenu/>
            <div className="listingIndex">
            <ListingIndex listings={listings}/>
            <button id="show" onClick={showMap}>Show Map  <i className="fa-solid fa-map" style={{color: "#ffffff",}}/></button>
        </div>
        </>)}
        {openMap && (<div className="mapIndex">
            <MapWrapper listings={listings}/>
            <button id="show" onClick={showList}>Show List <i className="fa-solid fa-list" style={{color: "#ffffff",}}/></button>
        </div>)}
        </>
    )
}