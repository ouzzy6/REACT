import React, { useState } from 'react';
import GithubUser from './components/GithubUser';

const App = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter Github username"
        />
      </form>
      {username && <GithubUser username={username} />}
    </div>
  );
};

export default App;
