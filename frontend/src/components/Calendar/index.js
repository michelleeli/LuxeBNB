import './calendar.css'

export default function Calendar({listing}) {

    
    return (
        <div class="Calendar">
            <p id="priceDisplay"><b>${listing && listing.price}</b> night</p>
            <button id="reserve">Reserve</button>
            <hr/>
            <p><b>Total</b></p>

        </div>
    )
}