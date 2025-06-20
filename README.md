# 🚀 React Redux Counter App
Getting some hands-on experience about React Redux

1. Now let's see how we are able to convert this example to Redux based approach.
    ✅ Setting up a Redux store

    ✅ Creating actions and reducers

    ✅ Dispatching actions from components
2. As per the first step, we need to install redux as below.
```shell
npm install redux react-redux
```
| Package       | Purpose                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| `redux`       | The core Redux library (store, actions, reducers, etc.)                     |
| `react-redux` | Provides React bindings like `<Provider>`, `useDispatch()`, `useSelector()` |

3. As per the next step, let's create a new folder called `reducers` and create a file inside that called `counterReducer.ts` and extract out our reducer functionality to there.
```typescript
export interface CounterState {
    count: number;
    error: string | null;
}

interface CounterAction {
    type: 'increment' | 'decrement';
}

export const counterReducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case 'increment':
            const newCountInc = state.count + 1;
            return {
                ...state,
                count: newCountInc > 5 ? state.count : newCountInc,
                error: newCountInc > 5 ? 'Maximum Reached' : null,
            };
        case 'decrement':
            const newCountDec = state.count - 1;
            return {
                ...state,
                count: newCountDec < 0 ? state.count : newCountDec,
                error: newCountDec < 0 ? 'Minimum Reached' : null,
            };
        default:
            return state;
    }
};
```
4. Now let's separate out actions in to a separate file called `counterActions.js` inside new folder called `actions`.
```typescript jsx
export const increment = () => ({
    type: 'increment'
});

export const decrement = () => ({
    type: 'decrement'
});
```
5. Now, let's define the redux store inside a folder called `store` and file called `store.ts`.
```typescript
import { createStore } from 'redux';
import {counterReducer} from "../reducers/counterReducer";

export const store = createStore(counterReducer);

export type CounterState = ReturnType<typeof counterReducer>;
```
6. Then, let's update `App.tsx` to use Redux `Provider` by wrap the `App.tsx`.
```typescript jsx
import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {createContext} from "react";
import {Provider} from "react-redux";
import {store} from "./store/store";

export const MessageContext = createContext('');

function App() {
    const message = "Hello There";
    return (
        <Provider store={store}>
            <MessageContext.Provider value={message}>
                <div className="app">
                    <Counter/>
                </div>
            </MessageContext.Provider>
        </Provider>
    );
}
export default App;
```
7. Now let's update `Counter.tsx` as below.
```typescript jsx
import './Counter.css';
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {CounterState} from "../../store/store";
import {decrement, increment} from "../../actions/counterActions";

export function Counter() {
    const  count = useSelector((state: CounterState) => state.count);
    const  error = useSelector((state: CounterState) => state.error);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count: {count}</h2>
            {error && <span className="error">
                {error}</span>}
            <div>
                <button className="button" onClick={()=> dispatch(increment())}>+</button>
                <button className="button" onClick={()=> dispatch(decrement())}>-</button>
            </div>
            <Message/>
        </div>
    );
}
```
8. To resolve the error "No overload matches this call.
   Overload 1 of 2", you need to define `initialState` for `CounterState`.
   Now our application works well with Redux store.
```typescript jsx
// Define the state of the Component
export interface CounterState {
    count: number,
    error: string | null
}

// 2. Define the initial state
const initialState: CounterState = {
    count: 0,
    error: null,
};

// Define the actions managed within
// the counter app
export interface CounterAction {
    type: 'increment' | 'decrement'
}

export function counterReducer(state = initialState, action: CounterAction) {
    const {type} = action;
    switch (type) {
        case "increment": {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Maximum value Reached' : null
            }
        }
        case "decrement": {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Minimum count Reached' : null
            }
        }
        default:
            return state;
    }
}
```
