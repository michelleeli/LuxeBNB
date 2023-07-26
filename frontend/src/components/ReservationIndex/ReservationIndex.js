import { ReservationIndexItem } from "./ReservationIndexItem"
import './reservation.css'
import { useSelector } from "react-redux"

export default function ReservationIndex({reservations}) {
    const currentUser = useSelector((state) => state.session.user)
    const upcomings = reservations?.filter((reservation) => (reservation.userId === currentUser.id) && new Date(reservation.startDate) >= new Date())
    const pasts = reservations?.filter((reservation) => (reservation.userId === currentUser.id) && new Date(reservation.startDate) < new Date())
    return (
        <div className="reservationIndex">
            <h1 id="Trip">Trips</h1>
            <h3>Upcoming reservations</h3>
            {upcomings.map(reservation => <ReservationIndexItem reservation={reservation}/>)}
            <h3 id="been">Where you've been</h3>
            {pasts.map(reservation => <ReservationIndexItem reservation={reservation}/>)}
        </div>
    )
}

