import React from 'react';
import Colors from './components/Colors';

const App = () => {
  const colorsArray = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];

  return (
    <div>
      <h1>List of Colors</h1>
      <Colors colors={colorsArray} />
    </div>
  );
};

export default App;
