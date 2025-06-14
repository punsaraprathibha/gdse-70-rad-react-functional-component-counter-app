import './Counter.css';
import {useReducer} from "react";
import {Message} from "../Message/Message";
import {counterSlice} from "../../slices/counterSlice";
import {useDispatch, useSelector} from "react-redux";
import {CounterState} from "../../store/store";
import {decrement, increment} from "../../actions/counterActions";

export function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state: CounterState) => state.count);
    const error = useSelector((state: CounterState) => state.error);

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