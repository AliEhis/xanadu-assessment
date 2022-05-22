import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import EventCard from '../components/EventCard'
import { useLocation } from 'react-router-dom'
import { convertDateTimeToTime, convertDateTimeToDay, titleCase } from '../functions'
import { getEventById } from "../redux/apiCalls";

const Event = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { selectedEvent, currency } = useSelector((state) => state.events);

    const category = decodeURI(location.pathname.split('/')[2]);
    const event = decodeURI(location.pathname.split('/')[3]);
    const eventId = location.pathname.split('/')[4];

    useEffect(() => {
        const loadEventById = async () => {
            try {
                getEventById(dispatch, eventId, { currency });
            } catch (err) {
                console.log(err)
            }
        }
        currency && loadEventById()
    }, [dispatch, currency, category, event, eventId])

    return (
        <div>
            <Navbar />
            <div className='main-wrapper'>
                <SideNavbar />
                <div className="listings container">
                    <div className="wrapper">
                        <h3 className="header-title">{ `${category && titleCase(category) } | ${event && titleCase(event) }`}</h3>
                        <div className="event-content">
                            <div className="event-top">
                                <div className="event-schedule">
                                    <div className="event-day">
                                        { selectedEvent && selectedEvent.start && convertDateTimeToDay(selectedEvent.start) }
                                    </div>
                                    <div className="event-time">
                                        { selectedEvent && selectedEvent.start && convertDateTimeToTime(selectedEvent.start) }
                                    </div>
                                </div>
                                <div className="event-info">
                                    <div className="event-fixture-name">
                                        {selectedEvent && selectedEvent.name && titleCase(selectedEvent.name)}
                                    </div>
                                </div>
                            </div>
                            <div className="event-bottom mt-1">
                                {
                                    selectedEvent && selectedEvent.markets && selectedEvent.markets.map((market, index) => {
                                        return (
                                            <EventCard key={index} market={market} currency={currency} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
