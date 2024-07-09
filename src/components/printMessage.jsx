import React, { useEffect, useRef } from 'react';


const FirstMountMessage = () => {
    const hasMountedRef = useRef(false);
  
    useEffect(() => {
      if (!hasMountedRef.current) {
        console.log('Component mounted for the first time');
        hasMountedRef.current = true;
      }
    }, []);
  
    return <div>Check the console for the first mount message.</div>;
  };

  export default FirstMountMessage;