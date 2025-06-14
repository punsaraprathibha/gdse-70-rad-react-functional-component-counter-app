// Define the state of the Component
export interface CounterState {
    count: number,
    error: string | null
}

const initialState: CounterState = {
    count: 0,
    error: null
}

// Define the actions managed within
// the counter app
interface CounterAction {
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