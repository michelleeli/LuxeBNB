import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchReservations } from "../../store/reservations";
import ReservationIndex from "./ReservationIndex";

export default function ReservationIndexPage() {
    const currentUser = useSelector(state => state.session.user)
    const history = useHistory()
    if (!currentUser) {
        history.push('/')
    }

    const reservations = useSelector((state) => Object.values(state.entities.reservations)).filter(reservation => reservation.userId === currentUser?.id)
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