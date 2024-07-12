import React from 'react';
import PropTypes from 'prop-types';
import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
  const { userData, loading, error } = useGithubUser(username);

  if (loading) return <p>Loading...</p>;
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
