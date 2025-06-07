# 🚀 React Counter App (useReducer() & useContext())
Getting some hands-on experience about `useReducer()` & `useContext()` hooks in React.

1. Firstly, let's clean up the code like below.
```typescript jsx
import React from "react";
import {useReducer} from "react";
import './Counter.css';

type CounterProps = {
    data?: any;
};

function Counter(props: CounterProps) {

    return (
        <div className="container">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count: 0</h2>
            <div>
                <button className="button">+</button>
                <button className="button">-</button>
            </div>
        </div>
    );
}

export default Counter;
```
2. Now let's see how to use useReducer() for state management.
3. Firstly let's define State and Action objects.
```typescript jsx
import React from "react";
import {useReducer} from "react";
import './Counter.css';

type CounterProps = {
    data?: any;
};

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: 'increment' | 'decrement';
}

function Counter(props: CounterProps) {

    return (
        <div className="container">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count: 0</h2>
            <div>
                <button className="button">+</button>
                <button className="button">-</button>
            </div>
        </div>
    );
}

export default Counter;
```
4. Now let's define useReducer() react hook.
```typescript jsx
import React from "react";
import {useReducer} from "react";
import './Counter.css';

type CounterProps = {
    data?: any;
};

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: 'increment' | 'decrement';
}

function Counter(props: CounterProps) {

    const [state, dispatch] = useReducer(
        reducer, {
            count: 0,
            error: null
        }
    );

    return (
        <div className="container">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count: 0</h2>
            <div>
                <button className="button">+</button>
                <button className="button">-</button>
            </div>
        </div>
    );
}

export default Counter;
```
5. Now let's define the reducer() method.
```typescript jsx
import React from "react";
import {useReducer} from "react";
import './Counter.css';

type CounterProps = {
    data?: any;
};

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: 'increment' | 'decrement';
}

function reducer(state: State, action: Action) {
    const {type} = action;
    switch (type) {
        case "increment": {
            return {...state, count: state.count + 1}
        }
        case "decrement": {
            return {...state, count: state.count - 1}
        }
        default:
            return state;
    }
}

function Counter(props: CounterProps) {

    const [state, dispatch] = useReducer(
        reducer, {
            count: 0,
            error: null
        }
    );

    return (
        <div className="container">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count: 0</h2>
            <div>
                <button className="button">+</button>
                <button className="button">-</button>
            </div>
        </div>
    );
}

export default Counter;
```
6. Now let's call the dispatch method and update the count in our counter app.
```typescript jsx
import React from "react";
import {useReducer} from "react";
import './Counter.css';

type CounterProps = {
    data?: any;
};

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: 'increment' | 'decrement';
}

function reducer(state: State, action: Action) {
    const {type} = action;
    switch (type) {
        case "increment": {
            return {...state, count: state.count + 1}
        }
        case "decrement": {
            return {...state, count: state.count - 1}
        }
        default:
            return state;
    }
}

function Counter(props: CounterProps) {

    const [state, dispatch] = useReducer(
        reducer, {
            count: 0,
            error: null
        }
    );

    return (
        <div className="container">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count: {state.count}</h2>
            <div>
                <button onClick={()=> dispatch({type: 'increment'})} className="button">+</button>
                <button onClick={()=> dispatch({type: 'decrement'})} className="button">-</button>
            </div>
        </div>
    );
}

export default Counter;
```
7. Now let's define some extra validation and display the necessary error messages.
```css
.error {
    color: red;
}
```
```typescript jsx
import React from "react";
import {useReducer} from "react";
import './Counter.css';

type CounterProps = {
    data?: any;
};

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: 'increment' | 'decrement';
}

function reducer(state: State, action: Action) {
    const {type} = action;
    switch (type) {
        case "increment": {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return {...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Maximum Reached' : null
            }
        }
        case "decrement": {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            return {...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Minimum Reached' : null
            }
        }
        default:
            return state;
    }
}

function Counter(props: CounterProps) {

    const [state, dispatch] = useReducer(
        reducer, {
            count: 0,
            error: null
        }
    );

    return (
        <div className="container">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count: {state.count}</h2>
            {state.error && <span className="error">{state.error}</span>}
            <div>
                <button onClick={()=> dispatch({type: 'increment'})} className="button">+</button>
                <button onClick={()=> dispatch({type: 'decrement'})} className="button">-</button>
            </div>
        </div>
    );
}

export default Counter;
```
8. Now let's see how to use `useContext()` for props management.
9. For that, let's create a new component called `Message`.
```typescript jsx
type MessageProps = {
    data: any;
}

export const Message = (props: MessageProps) => {
    return (
        <div>
            <br/><br/>
            {props.data}
        </div>
    );
};
```
10. Now let's import it in `Counter.tsx`.
```typescript jsx
<Message data={props.data}/>
```
11. Also, let's update the `App.tsx` like below.
```typescript jsx
const message = "Hello";

<Counter data={message}/>
```
12. So, here props being passed through each child component in order to use it in the last component (We call this as props drilling).
13. Now let's try to work with `createContext()` and `useContext()` react Hooks.
14. Please define following react hook inside `App.tsx` and wrap the App with it and no longer need to pass props to `Counter`.
```typescript jsx
import React, {createContext} from 'react';
import './App.css';
import Counter from "./Counter/Counter";

export const MessageContext = createContext('');

function App() {

    const message = "Hello There";

    return (
        <MessageContext.Provider value={message}>
            <Counter/>
        </MessageContext.Provider>
    );
}

export default App;
```
15. Inside `Counter.tsx` also, please remove all the props related changes and no need to pass props to `Message.tsx` anymore.
16. Inside `Message.tsx` also, you don't need to define props. Remove all of them.
17. Now inside `Message.tsx`, you can use `useContext()` React Hook and access the `MessageContext` to get the message.
```typescript jsx
import {useContext} from "react";
import {MessageContext} from "../App";

export const Message = () => {
    const message = useContext(MessageContext);

    return (
        <div>
            <br/><br/>
            {message}
        </div>
    );
};
```