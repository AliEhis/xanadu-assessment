import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        loading: true,
        offset: 0,
        currency: '',
        events: [],
        currencies: [],
        selectedEvent: {},
    },
    reducers: {
        updateLoading: (state, action) => {
            state.loading = action.payload;
        },
        addEvents: (state, action) => {
            state.events = [...state.events, ...action.payload.events];
            state.offset = action.payload.offset;
        },
        addCurrencies: (state, action) => {
            state.currencies = action.payload.currencies;
            state.currency = action.payload.currencies[0]["short-name"];
        },
        updateCurrency: (state, action) => {
            state.currency = action.payload;
        },
        updateEvents: (state, action) => {
            state.events = [...action.payload.events];
            state.offset = action.payload.offset;
        },
        selectedEvent: (state, action) => {
            state.selectedEvent = action.payload
        }
    }
});

export const { addEvents, updateEvents, selectedEvent, updateLoading, addCurrencies, updateCurrency } = eventsSlice.actions;
export default eventsSlice.reducer;
