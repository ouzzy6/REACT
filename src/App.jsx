import React from 'react';
import './index.css'; 

function Welcome() {
  return (
    <div className="welcome">
      <h1>¿Como están DevFriends?</h1>
      <p>¿Como van con los ejercicios?</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
