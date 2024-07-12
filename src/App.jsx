import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GithubUsers from './components/GithubUsers';
import ShowGithubUser from '../src/components/ShowGithubUser';

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
              <Link to="/users/octocat">View Octocat</Link>
            </li>
            <li>
              <Link to="/users/defunkt">View Defunkt</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={GithubUsers} />
          <Route path="/users/:username" component={ShowGithubUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
