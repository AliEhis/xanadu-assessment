import { combineReducers } from "redux";
import navigationReducer from "./reducers/navigationReducer";
import eventsReducer from "./reducers/eventsReducer";

export const rootReducer = combineReducers({
    events: eventsReducer,
    navigations: navigationReducer,
})

export default rootReducer;