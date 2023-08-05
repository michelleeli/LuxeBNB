import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './calendar.css'
import { DateRange } from 'react-date-range';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation } from '../../store/reservations';
import LoginForm from '../LoginForm/LoginForm';
import { Modal } from '../../context/Modal';
import { ListingIndexItem } from '../ListingIndex/ListingIndexItem';
import { parseISO } from 'date-fns';

export default function CalendarModal({listing}) {
  const [openCal, setOpenCal] = useState(false)
  const [openGuests, setOpenGuests] = useState(false)
  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)
  const guests = child + adult 
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.session.user)
  const [loggedOut, setLoggedOut] = useState(!currentUser)
  const [clickRes, setClickRes] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState(false)

  const reservations = useSelector((state) => state.entities.reservations)

  useEffect(()=> {
    setLoggedOut(!currentUser)
  }, [currentUser])

  useEffect(() => {
    if (!openCal) return;

    document.addEventListener('click', closeModals);
    
    return () => document.removeEventListener("click", closeModals);
  }, [openCal]);

  useEffect(() => {
    if (!openGuests) return;

    document.addEventListener('click', closeModals);
    
    return () => document.removeEventListener("click", closeModals);
  }, [openGuests]);

  useEffect(()=>{
    if (currentUser) {
      setClickRes(false)
    }
  }, [currentUser])

  const [dates, setDates] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);
  
  const closeModals = () => {
    setOpenCal(false)
    setOpenGuests(false)
  }

  const addAdult = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAdult(adult + 1)
  }

  const subAdult = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAdult(adult - 1)
  }
  

  const addChild = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (guests >= listing.maxGuests) {
      e.target.disabled = true
    } else {
      e.target.disabled = false
      setChild(child + 1)
    }
  }

  const subChild = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (child < 1) {
      e.target.disabled = true
    } else {
      e.target.disabled = false
      setChild(child - 1)
    }
  }

  const dateConvert = (date) => {
    let [m, d, y] = date.split('/')
    if (m.length <2) {
      m = "0" + m
    }
    if (d.length < 2) {
      d = "0" + d
    }
    return [y ,m ,d].join("-")
  }

  const numDays = () => {
    let timeDiff = dates[0].endDate.getTime() - dates[0].startDate.getTime();
    let days = timeDiff / (1000 * 3600 * 24);
    return days
  }

  const reserve = (e) => {
    e.preventDefault()
    if (loggedOut) {
      setClickRes(true)
      return;
    } 
    if (dates[0].startDate >= dates[0].endDate) {
      setError(true) 
      return;
    } 
    else {
      if (dispatch(createReservation({listing_id: listing.id, user_id: currentUser?.id, start_date: dates[0].startDate, end_date: dates[0].endDate, guests, total: (listing?.price * numDays())}))) {
        setSaved(true)
      }
    }
  }

  const totalFormat = () => {
    let total = (listing?.price * numDays())
    total = total.toLocaleString("en-US");
    return total
  }

  const reserved = () => {
    let dates = []
    Object.values(reservations).forEach (reservation => {
      let start = reservation.startDate;
      let d = new Date(start)
      let date = start
      while (date <= reservation.endDate) {
        dates.push(parseISO(date))
        d.setUTCDate(d.getUTCDate() + 1)
        date = (d.toISOString().substr(0,10))
      }
    })

    return dates;

  }

  return (
      <>
      {clickRes && (<Modal onClose={() => setClickRes(false)}>
          <LoginForm />
        </Modal>)}
      {error && <div className='errors'>
        <i class="fa-solid fa-circle-exclamation" style={{color: "#b34125",}}></i>
          <span>Minimum stay of 1 night</span>
        </div>}
      {listing && (
          <form onSubmit={reserve}>
              <div id="dateCaption">
                <div>CHECK IN</div>
                <div>CHECK OUT</div>
              </div>
              <div id="dates" onClick={(e)=>{e.stopPropagation(); setOpenCal(true); setOpenGuests(false); setError(false)}}>
                  <input id="checkin" type="date" placeholder="Check In" value={dateConvert(dates[0].startDate.toLocaleDateString())}/>
                  <input id="checkout" type="date" placeholder="Check Out" value={dateConvert(dates[0].endDate.toLocaleDateString())}/>
              </div>
              {openCal && 
              (<div id="calendar"> 
                <div class="calendarDescription">
                  <h2> {numDays()} nights </h2>    
                  <button id="done" onClick={()=> setOpenCal(false)} >Done</button>
                </div>
                <div onClick={(e)=> e.stopPropagation()}>
                  <DateRange months={2} direction="horizontal" color="#D33756" minDate={new Date()} editableDateInputs={true} onChange={item => setDates([item.selection])} moveRangeOnFirstSelection={false} ranges={dates} disabledDates={reserved()}/> 
                </div>
              </div> )}
              
                  
            <input id="guestSelect" type="text" placeholder='Guests' value={`${guests} guest(s)`} onClick={(e) => {e.stopPropagation(); setOpenGuests(true); setOpenCal(false)}}/>
            {openGuests && (
              <div id="guests" >
                <div id="adult">
                  <div>
                    <p>Adults</p>
                    <div id="ageCaption">Age 13+</div>
                  </div>
                  <div>
                    <button onClick={subAdult} disabled={adult <= 1? true : false}>-</button>
                    <span>{adult}</span>
                    <button onClick={addAdult} disabled={guests >= listing.maxGuests? true : false}>+</button>
                  </div>
                </div>
                <div id="child">
                  <div>
                    <p>Children</p>
                    <div id="ageCaption">Under 13</div>
                  </div>
                  <div>
                    <button onClick={subChild} disabled={child <= 0? true : false}>-</button>
                    <span>{child}</span>
                    <button onClick={addChild} disabled={guests >= listing.maxGuests? true : false}>+</button>
                  </div>
                </div>
                <button className="done" id="done" onClick={()=> setOpenGuests(false)}>Done</button>
              </div>
            )}

            <button id="reserve">Reserve</button>
            <p id="reserveCaption">You wont be charged yet</p>
            
            {numDays() > 0 && (
              <>
                <div className="fees">
                <span><u>${listing.price} x {numDays()} days</u></span>
                <span>${listing.price * numDays()}</span>
              </div>
              <div className="fees">
                <span><u>Luxebnb service fee</u></span>
                <span>${Math.round(listing.price * numDays() * 0.03)}</span>
              </div>
              <div className="fees">
                <span><u>Cleaning fee</u></span>
                <span>${Math.round(listing.price * numDays() * 0.02)}</span>
              </div>
              <hr/>

              <h3 className="total">
                <b>Total</b>
                <span>${totalFormat()}</span>
              </h3>
              </>
            )}

          </form>
        )}
        {saved && (
          <Modal onClose={() => setSaved(false)}>
            <div id="saved">
              <button id="confirmClose" onClick={()=>setSaved(false)}>Close</button>
              <h2>Booking Confirmed</h2>
              <h3>Enjoy your trip!</h3>
              <ListingIndexItem listing={listing}/> 
            </div>
          </Modal>
        )}
        </>
    )
      
}