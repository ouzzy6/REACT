import React from 'react';
import FilteredList from './components/FilteredList';

const App = () => {
  const people = [
    { id: 1, name: 'Juan', age: 20 },
    { id: 2, name: 'Ana', age: 17 },
    { id: 3, name: 'Luis', age: 22 },
    { id: 4, name: 'María', age: 16 },
  ];

  return (
    <div>
      <h1>Personas mayores de 18 años</h1>
      <FilteredList list={people} />
    </div>
  );
};

export default App;
