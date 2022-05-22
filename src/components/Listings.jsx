import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../redux/apiCalls";
import ListCard from './ListCard';
import SortByStartTime from './SortByStartTime';

const Listings = () => {
    const dispatch = useDispatch();
    const { events, offset, currency, loading } = useSelector((state) => state.events);

    const loadMoreEvents = async () => {
        try {
            getEvents(dispatch, true, { currency, offset: offset + 1 });
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const loadEvents = async () => {
            try {
                getEvents(dispatch, false, { currency });
            } catch (err) {
                console.log(err)
            }
        }
        currency && loadEvents()
    }, [currency, dispatch])

    return (
        <div className='listings container'>
            <div className='wrapper'>
                <div className="d-flex justify-content-between align-items-center mb-1">
                    <h3 className="header-title m-0">EVENTS</h3>
                    <SortByStartTime />
                </div>
                {events && events.length > 0 && events.map((event, i) => (
                    <ListCard key={i} event={event} category="all"/>
                ))}
                <button className="btn btn-more" onClick={loadMoreEvents} disabled={loading}>{loading ? "Loading..." : "Load more" }</button>
            </div>
        </div>
    )
}

export default Listings
