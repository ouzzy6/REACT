import React, { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
  const [username, setUsername] = useState('');
  const [usernames, setUsernames] = useState([]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
    }
    setUsername('');
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
        <button type="submit">Search</button>
      </form>
      <ul>
        {usernames.map((uname, index) => (
          <li key={index}>
            <GithubUser username={uname} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUsers;
