import React, { useState } from 'react'

import './Counter.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [peace, setPeace] = useState(1)

    const subtractFromCounter = () => {
        setCounter(counter - peace)
    }

    const addToCounter = () => {
        setCounter(counter + peace)
    }

    return (
        <div>
            <h1 data-testid="title">My Counter</h1>

            <div data-testid="counter" className={`${(counter <= -100 ? 'red ' : "")}${(counter >= 100 ? 'green ' : "")}counter`}>{counter}</div>

            <div>
                <button
                    data-testid="subtract-btn"
                    onClick={subtractFromCounter}
                >-</button>
                <input
                    data-testid="peace"
                    type="number"
                    value={peace}
                    className="text-center"
                    onChange={(event) => setPeace(event.target.valueAsNumber)}
                />
                <button
                    data-testid="add-btn"
                    onClick={addToCounter}
                >+</button>
            </div>
        </div>
    )
}

export default Counter
