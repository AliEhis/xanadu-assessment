import { publicRequest } from "../functions/axiosInstance";
import { addNavigation } from "./reducers/navigationReducer"
import { addEvents, updateEvents, selectedEvent, updateLoading, addCurrencies } from "./reducers/eventsReducer";
import { generateURLQuery } from "../functions";

export const setLoading = async (dispatch, status) => {
    dispatch(updateLoading(status));
}
 
export const getNavigations = async (dispatch) => {
    try {
        const res = await publicRequest.get(`edge/rest/navigation`)
        dispatch(addNavigation(res.data));
    } catch (error) {
        console.log(error);
        alert("Error getting navigations");
    }
}

export const getEvents = async (dispatch, loadMore = false, query = null) => {
    try {
        setLoading(dispatch, true);
        let res;
        if (query) {
            let ulrQuery = generateURLQuery(query);
            res = await publicRequest.get(`edge/rest/events${ulrQuery}`)
        } else {
            res = await publicRequest.get(`edge/rest/events`)
        }
        if (loadMore) {
            dispatch(addEvents(res.data));
        } else {
            dispatch(updateEvents(res.data));
        }
        setLoading(dispatch, false);
    } catch (error) {
        console.log(error);
        alert("Error getting events");
    }
}

export const getEventById = async (dispatch, eventId, query) => {
    try {
        let ulrQuery = generateURLQuery(query);
        const res = await publicRequest.get(`edge/rest/events/${eventId}${ulrQuery}`)
        dispatch(selectedEvent(res.data));
    } catch (error) {
        console.log(error);
        alert("Error getting events by Id");
    }
}

export const getCurrencies = async (dispatch) => {
    try {
        const res = await publicRequest.get(`bpapi/rest/lookups/currencies`)
        dispatch(addCurrencies(res.data));
    } catch (error) {
        console.log(error);
        alert("Error loading currencies");
    }
}
