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

const initialState: CounterState = {
    count: 0,
    error: null,
};

export const counterReducer = (state = initialState, action: CounterAction) => {
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