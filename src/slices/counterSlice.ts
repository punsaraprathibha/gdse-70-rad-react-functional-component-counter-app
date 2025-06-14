// Define the state of the Component
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export interface CounterState {
    count: number,
    error: string | null
}

const initialState: CounterState = {
    count: 0,
    error: null
}

export const incrementAsync
    = createAsyncThunk(
    'counter/incrementAsync',
    async (count: number) => {
        await new Promise(resolve => setTimeout(resolve, 5000));
        return count;
    }
)

export const counterSlice = createSlice({
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
    },
    extraReducers:
        (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("incrementAsync is" +
                " still pending");
        }).addCase(incrementAsync.fulfilled,
            (state,
             action) => {
            state.count += action.payload; // Increment current count by the value provided
        })
    }
});

export const { increment, decrement} = counterSlice.actions; // Expert actions separately as one by one
export default counterSlice.reducer; // Export reducer as default