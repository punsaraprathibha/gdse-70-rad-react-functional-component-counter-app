import './Counter.css';
import {useReducer} from "react";
import {Message} from "../Message/Message";
import {counterReducer} from "../../reducers/counterReducer";

export function Counter() {

    const [state, dispatch] = useReducer(
        counterReducer, {
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