import { useState } from "react"

export function Counter({initialValue = 0}){

    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }

    function handleCounterDecrement(){
        setCounter((c) => c + 1)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return (
    <div>
        <p>I have counted to _COUNTER_</p>
        <button onClick={handleCounterIncrement}>Increment</button>
        <button onClick={handleCounterDecrement}>Decrement</button>
        <button onClick={handleCounterReset}>Reset</button>
    </div>
    )
}