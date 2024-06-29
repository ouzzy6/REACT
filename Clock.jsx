import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(tick, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
