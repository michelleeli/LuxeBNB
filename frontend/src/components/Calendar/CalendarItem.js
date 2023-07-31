import { DateRange } from "react-date-range"
import { useState } from "react";
import { useSelector } from "react-redux";
import { parseISO } from 'date-fns';

export default function CalendarItem() {
    const [dates, setDates] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ]);

    const reservations = useSelector((state) => state.entities.reservations)

    const reserved = () => {
        let dates = []
        Object.values(reservations)?.forEach (reservation => {
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
        <DateRange months={2} direction="horizontal" color="#D33756" minDate={new Date()} editableDateInputs={true} onChange={item => setDates([item.selection])} moveRangeOnFirstSelection={false} ranges={dates} disabledDates={reserved()}/> 
    )
}