import { ReservationIndexItem } from "./ReservationIndexItem"
import './reservation.css'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Explore from "./Explore"
import { useEffect } from "react"
import { fetchReservations } from "../../store/reservations"

export default function ReservationIndex({reservations}) {
    const dispatch = useDispatch()

    const upcomings = reservations.filter(reservation => (new Date(reservation.startDate) >= new Date())).sort(function(a,b){return new Date(a.startDate) - new Date(b.startDate)})
    const pasts = reservations.filter((reservation) => ( new Date(reservation.startDate) < new Date()))
    const currentUser = useSelector(state => state.session.user)

    const history = useHistory()

    if (!currentUser) {
        history.push('/')
    }

    const browse = () => {
        history.push('/')
    }

    useEffect(()=> {
        dispatch(fetchReservations())
    }, [])

    return (
        <div className="reservationIndex">
            <h1 id="Trip">Trips</h1>
            <div id="explore">
                <h4>Explore more</h4>
                <div id="exploreItems">
                    <Explore/>
                    <button className="submit" onClick={browse}>Keep Browsing</button>
                </div>
            </div>
            <h3>Upcoming reservations</h3>
            {(upcomings.length === 0) && 
                <div id="noTrips">
                    <hr/>
                    <h3>No trips booked ... yet!</h3>
                    <div>Time to dust off your bags and start planning your next adventure</div>
                    <button id="browse" onClick={browse}>Start browsing</button>
                    <hr/>
                </div>
            }
            {upcomings.map(reservation => <ReservationIndexItem reservation={reservation}/>)}
            {pasts.length > 0 && <h3 id="been">Where you've been</h3>}
            {pasts.map(reservation => <ReservationIndexItem reservation={reservation}/>)}
        </div>
    )
}

