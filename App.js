function App() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Simple React App</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));