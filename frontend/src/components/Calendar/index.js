import CalendarModal from './Calendar'
import './calendar.css'

export default function Calendar({listing}) {
    
    return (
        <div class="Calendar">
            <p id="priceDisplay"><b>${listing && listing.price}</b> night</p>
            <CalendarModal listing={listing}/>
            <button id="reserve">Reserve</button>
            <p id="reserveCaption">You wont be charged yet</p>
            <hr/>
            <p><b>Total</b></p>
        </div>
    )
}