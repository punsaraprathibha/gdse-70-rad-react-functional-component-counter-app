import {counterSlice}
    from "../slices/counterSlice";
import {configureStore} from "@reduxjs/toolkit";
import counterReducer
    from '../slices/counterSlice';
import {rootReducer}
    from "../reducers/rootReducer";
import exp from "constants";
    // Import the default exported reducer
export const store = configureStore({
    reducer: rootReducer // Define counter reducer which contains the logic to update counter
});

export type AppDispatch
    = typeof store.dispatch;
export type RootState =
    ReturnType<typeof store.getState>