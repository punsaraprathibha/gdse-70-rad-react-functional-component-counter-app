// Define the state of the Component
import {createSlice} from "@reduxjs/toolkit";

export interface CounterState {
    count: number,
    error: string | null
}

const initialState: CounterState = {
    count: 0,
    error: null
}

// Define the actions managed within
// the counter app
interface CounterAction {
    type: 'increment' | 'decrement'
}

export const counterSlice
    = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            if (hasError) { // Fail/Invalid Scenario
                state.error = 'Maximum value Reached';
            } else {
                state.count = newCount;
                state.error = null;
            }
        },
        decrement(state) {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            if (hasError) {
                state.error = "Minimum count Reached";
            } else {
                state.count = newCount;
                state.error = null;
            }
        }
    }
});

export const { increment,
    decrement
} = counterSlice.actions; // Expert actions separately as one by one
export default counterSlice.reducer; // Export reducer as default