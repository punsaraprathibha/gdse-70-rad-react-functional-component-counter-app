import './Counter.css';

export function Counter(props: any) {
    return (
        <div className="counter">
            <h1>React Counter (Functional Components)</h1>
            <h2>Count: 0</h2>
            <div>
                <button className="button">+</button>
                <button className="button">-</button>
            </div>
        </div>
    );
}