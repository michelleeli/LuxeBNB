import CalendarModal from './Calendar'
import './calendar.css'

export default function Calendar({listing, reservation, closeModal}) {
    
    return (
        <div class="Calendar">
            <p id="priceDisplay"><b>${listing && (listing.price.toLocaleString())}</b> night</p>
            <CalendarModal listing={listing} reservation={reservation} closeModal={closeModal}/>
        </div>
    )
}