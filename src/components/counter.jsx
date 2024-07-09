import React, { useState, useRef, useEffect } from 'react';


const Counter = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue);
    const directionRef = useRef(null);
    const prevDirectionRef = useRef(null);
  
    const handleIncrement = () => {
      setCount((prevCount) => prevCount + 1);
    };
  
    const handleDecrement = () => {
      setCount((prevCount) => prevCount - 1);
    };
  
    useEffect(() => {
      if (count > initialValue) {
        directionRef.current = 'up';
      } else if (count < initialValue) {
        directionRef.current = 'down';
      } else {
        directionRef.current = null;
      }
  
      if (directionRef.current !== prevDirectionRef.current) {
        if (directionRef.current !== null) {
          console.log(`Direction changed to: ${directionRef.current}`);
        }
        prevDirectionRef.current = directionRef.current;
      }
    }, [count, initialValue]);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    );
  };

  export default Counter;
