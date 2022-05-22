import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        navigations: []
    },
    reducers: {
        addNavigation: (state, action) => {
            state.navigations = action.payload;
        }
    }
});

export const { addNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;
