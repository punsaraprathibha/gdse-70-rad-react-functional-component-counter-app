import './Counter.css';
import {useReducer} from "react";
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../actions/counterActions";
import {RootState} from "../../store/store";

export function Counter() {
    const dispatch = useDispatch();
    // const count = useSelector((state: CounterState) => state.count);
    // const error = useSelector((state: CounterState) => state.error);
    const {count, error} = useSelector((state: RootState) => state.counter); // Now you can update like this to catch the count and error
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