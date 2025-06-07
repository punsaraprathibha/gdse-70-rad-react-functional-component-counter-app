import './Counter.css';
import {useReducer} from "react";
import {Message} from "../Message/Message";

// Define the state of the Component
interface State {
    count: number,
    error: string | null
}

// Define the actions managed within
// the counter app
interface Action {
    type: 'increment' | 'decrement'
}

function reducer(state: State, action: Action) {
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

export function Counter() {

    const [state, dispatch] = useReducer(
        reducer, {
            count: 0,
            error: null
        }
    );

    return (
        <div className="counter">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count: {state.count}</h2>
            {state.error && <span className="error">
                {state.error}</span>}
            <div>
                <button className="button" onClick={()=> dispatch({type: 'increment'})}>+</button>
                <button className="button" onClick={()=> dispatch({type: 'decrement'})}>-</button>
            </div>
            <Message/>
        </div>
    );
}