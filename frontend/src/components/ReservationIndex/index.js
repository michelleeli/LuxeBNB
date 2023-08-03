import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchReservations } from "../../store/reservations";
import ReservationIndex from "./ReservationIndex";

export default function ReservationIndexPage() {
    const reservations = useSelector((state) => Object.values(state.session.user.reservations))
    // const dispatch = useDispatch();
    // const help = useSelector(state => Object.values(state.entities.reservations))
    
    // useEffect(() => {
    //     dispatch(fetchReservations())
    // }, [])

    return (
        <div>
            <ReservationIndex reservations={reservations}/>
        </div>
    )
}