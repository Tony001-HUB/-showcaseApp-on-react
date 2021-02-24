import React, { useState } from 'react';

function App() {
    let [count, setVal] = useState(0);
   
    const increment = () => {
        setVal(count + 1)
    }
    const decrement = () => {
        setVal(count - 1)
    }

    return (
        <div className="App">
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    );
    
}

export default App;
