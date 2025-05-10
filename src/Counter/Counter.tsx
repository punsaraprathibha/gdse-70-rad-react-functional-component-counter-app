import './Counter.css';
import {useEffect, useState} from "react";

export function Counter(props: any) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert("componentDidMount: " +
            "Component has been mounted! " +
            "Props: " + props.data);
        return () => {
            alert("componentWillUnmount: " +
                "component is being removed!")
        }
    }, []); // Run only Once (Empty dependency array

    useEffect(() => {
        alert("componentDidUpdate: " +
            "Count has been updated!")
    }, [count]);// Runs each time when count changes

    const increment = () => {
        setCount(
            (prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount(
            (prevCount) => prevCount - 1);
    }
    return (
        <div className="counter">
            <h1>React Counter (Functional Components)</h1>
            <h2>Count: {count}</h2>
            <div>
                <button className="button"
                         onClick={increment}>+</button>
                <button className="button"
                        onClick={decrement}>-</button>
            </div>
        </div>
    );
}