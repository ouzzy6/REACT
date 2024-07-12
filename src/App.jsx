import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GithubUserList from './GithubUserList';
import GithubUsers from './GithubUsers';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Github Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={GithubUsers} />
          <Route path="/users" component={GithubUserList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
