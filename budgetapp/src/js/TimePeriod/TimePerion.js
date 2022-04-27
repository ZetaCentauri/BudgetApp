import { useState, useContext, useEffect } from "react";
import DataContext from '../DataContext/DataContext';

const TimePeriod = () => {

    const [timePeriod, setTimePeriod] = useState("");
    const {month, setMonth, year, setYear} = useContext(DataContext);
    const months = ["styczeń","luty","marzec","kwiecień",
             "maj","czerwiec","lipiec","sierpień",
             "wrzesień","październik","listopad","grudzień"];

    useEffect(()=> {
         const d = new Date();
        let currentMonth = months[d.getMonth()];
        let currentYear = d.getFullYear();
        setTimePeriod(`${currentMonth} ${currentYear}`);
    }, []);

    const handleDate = (change) => {
        if (month < 12) {
        setMonth(prev => prev + change);
        setTimePeriod(`${months[month]} ${year}`); 
        } else {
            setMonth(1);
            setYear(prev => prev + 1);
            setTimePeriod(`${months[month]} ${year}`); 
        }

        setTimePeriod(`${months[month]} ${year}`); 
    }

    return (
        <div className="time-period">
            <button className="arrow-left" onClick={()=>handleDate(-1)}/>
            <span>{timePeriod}</span>
            <button className="arrow-right" onClick={()=>handleDate(1)}/>
        </div>
    )
}

export default TimePeriod;