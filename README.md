1. Now, let's check the usage of `Redux Toolkit`. For that you need to install the `Redux Toolkit`.
```shell
npm install @reduxjs/toolkit
```
2. As per the first step, let's convert `counterReducer.ts` to `counterSlice.ts`.
```typescript
import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    count: number;
    error: string | null;
}

const initialState: CounterState = {
    count: 0,
    error: null,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            if (hasError) {
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
                state.error = 'Minimum count Reached';
            } else {
                state.count = newCount;
                state.error = null;
            }
        }
    }
});

export const { increment, decrement } = counterSlice.actions; // Expert actions seperately as one by one
export default counterSlice.reducer; // Expert Reducer as default
```
3. Now, let's define `rootReducer.ts` to Combine multiple reducers (to maintain modular structure)
```typescript
import { combineReducers } from 'redux'; // It comes from redux package
import counterReducer from '../reducers/counterSlice';

export const rootReducer = combineReducers({ // We combine Reducers when there are multiple available
    counter: counterReducer, // Define counter reducer which contains the logic to update counter
});

export type RootState = ReturnType<typeof rootReducer>; // Returns the RootState to outside
```
4. Now, in `store.ts`, let's use `configureStore` instead of deprecated `createStore` we previously used.
```typescript
import { configureStore } from '@reduxjs/toolkit'; // It comes from redux toolkit
import { rootReducer } from '../reducers/rootReducer'; // Here we define rootReducer as the reducer here

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch; // Expert common type for usage inside the Application
export type RootState = ReturnType<typeof store.getState>; // Expert the RootState as Root state
```
5. Also, you need to update `Counter.tsx` like this:
    Here you need to re-import actions from `counterSlice.ts`:
```typescript jsx
import './Counter.css';
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {decrement, increment} from "../../reducers/counterSlice"; // Import actions from counterSlice.ts

export function Counter() {
    const dispatch = useDispatch();
    const { count, error } = useSelector((state: RootState) => state.counter); // Now you can update like this to catch the count and error

    return (
        <div className="counter">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count: {count}</h2>
            {error && <span className="error">
                {error}</span>}
            <div>
                <button className="button" onClick={()=> dispatch(increment())}>+</button> // Use them Here
                <button className="button" onClick={()=> dispatch(decrement())}>-</button> // Use them Here
            </div>
            <Message/>
        </div>
    );
}
```
6. Now let's have a look at how to handle asynchronous behaviours with `redux-thunk`.
7. For that, let's define a new async function inside `counterSlice.ts`.
```typescript
export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (count: number) => {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Artificially create a async scenario (Promise type)
        return count;
    }
);
```
8. Also, let's define `extraReducers` in `counterSlice.ts` to handle these kind of async behaviour.
```typescript
extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending");
    }).addCase(incrementAsync.fulfilled, (state, action) => {
        state.count += action.payload;
    })
}
```
9. Then, let's add a new button to call async function in the `Counter.tsx`.
```typescript jsx
<button className="button" onClick={()=> dispatch(incrementAsync(1))}>Increment Async</button>
```
10. Also make sure to define the generic type for `useDispatch()` in `Counter.tsx`.
```typescript
const dispatch = useDispatch<AppDispatch>();
```
11. Now you can add redux dev tools as an extension in your browser and see the behaviour.
```
https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
```