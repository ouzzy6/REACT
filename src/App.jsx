import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubUsers from './components/GithubUser';
import ShowGithubUser from './components/showGitHubUser';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={GithubUsers} />
          <Route path="/users/:username" component={ShowGithubUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
