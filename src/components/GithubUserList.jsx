import React, { useState, useEffect } from 'react';
import { Link, Route, useRouteMatch, Switch } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';

const GithubUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Github Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${url}/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={path}>
          <p>Add a user and select it</p>
        </Route>
        <Route path={`${path}/:username`} component={ShowGithubUser} />
      </Switch>
    </div>
  );
};

export default GithubUserList;
