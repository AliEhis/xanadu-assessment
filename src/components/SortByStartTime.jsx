import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { convertToUnixTime } from '../functions';
import { getEvents } from '../redux/apiCalls';

const SortByStartTime = () => {
    const dispatch = useDispatch();
    const { offset, currency, loading } = useSelector((state) => state.events);
    const [customDate, setCustomDate] = useState("");
    const [customTime, setCustomTime] = useState("");

    const handleSortByDate = (e) => {
        const { name, value } = e.target;
        if (name === "date") {
            setCustomDate(value);
        }
        if (name === "time") {
            setCustomTime(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!customDate) {
            return false;
        }
        getEvents(dispatch, false, {
            offset,
            currency,
            after: convertToUnixTime(customDate, customTime)
        });
    }
    
    return (
        <>
            <div className="datetime-sorting">
                <input type="date" name="date" value={customDate} onChange={handleSortByDate}/>
                <input type="time" className="ml-1" name="time" value={customTime} onChange={handleSortByDate}/>
                <button className="ml-1 btn btn-submit" onClick={(e) => handleSubmit(e)} disabled={loading}>{ loading ? 'Please wait' : 'Submit' }</button>
            </div>
        </>
    )
}

export default SortByStartTime