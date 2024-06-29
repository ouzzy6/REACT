import React from 'react';

const MouseClicker = () => {
  const handleClickButton = (event) => {
    console.log(event.target.name);
  };

  const handleClickImage = (event) => {
    event.stopPropagation();
    console.log(event.target.src);
  };

  return (
    <button name="one" onClick={handleClickButton}>
      Click me
      <img 
        src="https://via.placeholder.com/150" 
        alt="placeholder" 
        onClick={handleClickImage} 
        style={{ marginLeft: '10px' }} 
      />
    </button>
  );
};

export default MouseClicker;
