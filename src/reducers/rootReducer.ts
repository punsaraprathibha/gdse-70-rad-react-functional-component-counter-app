import {combineReducers} from "redux"; // It comes from redux core package
import counterReducer from '../slices/counterSlice';
export const rootReducer = combineReducers({
    counter: counterReducer,
    // TODO - Add More Reducers here
});
export type RootState
    = ReturnType<typeof rootReducer>;