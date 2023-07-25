import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchReservations } from "../../store/reservations";
import ReservationIndex from "./ReservationIndex";

export default function ReservationIndexPage() {
    const reservations = useSelector((state) => Object.values(state.entities.reservations))
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchReservations())
    }, [])

    return (
        <div>
            <ReservationIndex reservations={reservations}/>
        </div>
    )
}