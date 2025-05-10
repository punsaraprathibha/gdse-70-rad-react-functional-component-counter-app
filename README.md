# 🚀 React Counter App (Functional Components)
Getting some hands-on experience about React Hooks, State and Props Management, using functional components

1. Firstly let's clean up the current `App.tsx` file content our project.
2. Let's define `App.tsx` fie's structure as a React functional component like this.
 ```typescript jsx
import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app">
            <h1>This is App Component!</h1>
        </div>
    );
}

export default App;
```
In `App.css`:
```css
.app {
  background-color: blue;
}
```

3. Here we're going to create a counter app. So, we need to create a new package called `counter` and a new component called `Counter.tsx` inside it.
```typescript jsx
import React from 'react';
import './Counter.css';

function Counter() {
   return (
      <div className="counter">
         <h1>This is Counter App Component!</h1>
      </div>
   );
}

export default Counter;
```
In `Counter.css`
```css
.counter {
  background-color: red;
}
```

Define `Counter` inside the div in `App.tsx` in order to render it in the browser:
```typescript jsx
function App() {
    return (
        <Counter />
    );
}
```

4. Now let's design the content of the counter app inside render function.
```typescript jsx

import React from 'react';
import './Counter.css';

function Counter() {
    return (
        <div className="container">
            <h1>React Counter (Class Component)</h1>
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

In `Counter.css`
```css
.container {
    text-align: center;
    padding: 2rem;
    font-family: Arial, serif;
    border: 2px solid #0e0e0e;
    border-radius: 10px;
    width: 300px;
    margin: 2rem auto;
    background-color: #d9d5d5;
}

.button {
    font-size: 1.5rem;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: lightblue;
}
```

5. Now let's understand what are the steps that UI renders (useEffect) (React Hook) in React app.
```typescript jsx
import React, {useState, useEffect, useRef} from "react";
import './Counter.css';

function Counter(props: any) {

    // Mimics componentDidMount
    useEffect(() => {
        alert("componentDidMount: Component has been mounted! Received Props: " + props.data);
        console.log("componentDidMount: Component has been mounted");

        // Mimics componentWillUnmount
        return () => {
            alert("componentWillUnmount: Component is being removed");
            console.log("componentWillUnmount: Component is being removed");
        };
    }, []); // Empty dependency array = run only once on mount

    return (
        <div className="container">
            <h1>React Counter (Functional Component)</h1>
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

Here, you need to pass the props in `App.tsx`:
```typescript jsx
return (
    <div className="App">
        <Counter data={"Hello"}/>
    </div>
);
```

6. Let's have a look at the how to manage UI updates using same React Hook `useEffect` (With state updates using `useState`)
```typescript jsx
import React, {useState, useEffect, useRef} from "react";
import './Counter.css';

type CounterProps = {
    data?: any;
};

function Counter(props: CounterProps) {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef<number | null>(null);

    // Mimics componentDidMount
    useEffect(() => {
        alert("componentDidMount: Component has been mounted! Received Props: " + props.data);
        console.log("componentDidMount: Component has been mounted");

        // Mimics componentWillUnmount
        return () => {
            alert("componentWillUnmount: Component is being removed");
            console.log("componentWillUnmount: Component is being removed");
        };
    }, []); // Empty dependency array = run only once on mount

    // Mimics componentDidUpdate
    useEffect(() => {
        if (prevCountRef.current !== null && prevCountRef.current !== count) {
            alert("componentDidUpdate: Count has been updated");
            console.log("componentDidUpdate: Count has been updated");
        }
        prevCountRef.current = count;
    }, [count]); // Runs when 'count' changes

    const increment = () =>
        setCount((prev) => prev + 1);
    const decrement = () =>
        setCount((prev) => prev - 1);

    return (
        <div className="container">
            <h1>React Counter (Functional Component)</h1>
            <h2>Count: {count}</h2>
            <div>
                <button onClick={increment} className="button">+</button>
                <button onClick={decrement} className="button">-</button>
            </div>
        </div>
    );
}

export default Counter;
```

Define props in `Counter.tsx` as optional if it's not mandatory:

```typescript jsx
type CounterProps = {
    data?: any;
};
```