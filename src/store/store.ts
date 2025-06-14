import {counterSlice}
    from "../slices/counterSlice";
import {configureStore} from "@reduxjs/toolkit";
import counterReducer
    from '../slices/counterSlice';
    // Import the default exported reducer
export const store
    = configureStore({
    reducer: counterReducer // Define counter reducer which contains the logic to update counter
});
export type CounterState =
    ReturnType<typeof counterReducer>