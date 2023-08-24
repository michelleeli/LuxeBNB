import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExploreItem from "./ExploreItem";
import { fetchListings } from "../../store/listings";

export default function Explore () {
    const dispatch = useDispatch()


    const listing1 = useSelector((state)=> state.entities.listings[1])
    const listing2 = useSelector((state)=> state.entities.listings[2])
    const listing3 = useSelector((state)=> state.entities.listings[5])
    const listing4 = useSelector((state)=> state.entities.listings[4])

    useEffect(()=> {
        dispatch(fetchListings())
    }, [])

    return (
        <div className="explore">
            <ExploreItem listing={listing1}/>
            <ExploreItem listing={listing2}/>
            <ExploreItem listing={listing3}/>
            <ExploreItem listing={listing4}/>
        </div>
    )
}