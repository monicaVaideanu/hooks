import React, { useState, useEffect } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('First time rendering');
        return () => {
            console.log('cleanup');
        };
    },[]);

    useEffect(() => {
        console.log('Updating the counter, current value: ' + count);
    },[count]);

return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={ () => setCount(count + 1)}>Count is up </button>
        <button onClick={ () => setCount(count - 1)}>Count is down</button>
    </div>
)
}
export default Counter;