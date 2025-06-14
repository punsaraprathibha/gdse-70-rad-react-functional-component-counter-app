import {createStore} from "redux";
import {counterSlice}
    from "../slices/counterSlice";
export const store
    = createStore(counterSlice);
export type CounterState =
    ReturnType<typeof counterSlice>