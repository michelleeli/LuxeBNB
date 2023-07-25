import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './calendar.css'
import { DateRange } from 'react-date-range';
import { useState } from 'react';

export default function CalendarModal({listing}) {
    const [openCal, setOpenCal] = useState(false)
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      
      const toggleCalendar = () => {
        setOpenCal(!openCal)
      }

    return (
        <>
        {listing && (
            <form>
                <div className="dates" onClick={toggleCalendar}>
                    <input type="text" placeholder="Check In" value={state[0].startDate.toDateString().slice(4)}/>
                    <input type="text" placeholder="Check Out" value={state[0].endDate.toDateString().slice(4)}/>
                </div>
                {openCal && (<div id="calendar"> <DateRange months={2}   direction="horizontal" color="#D33756"
                minDate={new Date()} editableDateInputs={true} onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false} ranges={state}/> </div> )}
                    
            <input id="guestSelect" type="number" min="1" max={listing.maxGuests} placeholder='Guests'/>
        </form>
        )}
        </>
    )
      
}
