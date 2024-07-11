import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    userData && (
      <div>
        <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
        <h2>{userData.name}</h2>
        <p>{userData.login}</p>
      </div>
    )
  );
};

GithubUser.propTypes = {
  username: PropTypes.string.isRequired,
};

export default GithubUser;
