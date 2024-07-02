import React from 'react';
import './App.css';
import Login from './Login';

function App() {
  const handleLogin = (loginData) => {
    console.log('Login data:', loginData);
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
