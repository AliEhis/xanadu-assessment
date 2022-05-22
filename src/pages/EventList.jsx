import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import { useLocation } from 'react-router-dom'
import { titleCase } from '../functions'
import { getEvents } from "../redux/apiCalls";
import ListCard from '../components/ListCard';
import SortByStartTime from '../components/SortByStartTime';

const EventList = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { events, offset, currency, loading } = useSelector((state) => state.events);
    const categoryId = location.pathname.split('/')[3];
    const category = decodeURI(location.pathname.split('/')[2]);

    const loadMoreEvents = async () => {
        try {
            getEvents(dispatch, true, { currency, offset: offset + 1, 'sport-ids': categoryId });
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const loadEventById = async () => {
            try {
                getEvents(dispatch, false, {currency, 'sport-ids': categoryId});
            } catch (err) {
                console.log(err)
            }
        }
        currency && loadEventById()
    }, [dispatch, currency, categoryId])

    return (
        <div>
            <Navbar />
            <div className='main-wrapper'>
                <SideNavbar />
                <div className="listings container">
                    <div className="wrapper">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <h3 className="header-title m-0">{category && titleCase(category)}</h3>
                            <SortByStartTime />
                        </div>
                        {
                            events && events.length > 0 && events.map((event, i) => (
                                <ListCard key={i} event={event} category={category} />
                            ))
                        }
                        <button className="btn btn-more" onClick={loadMoreEvents} disabled={loading}>{loading ? "Loading..." : "Load more" }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventList
