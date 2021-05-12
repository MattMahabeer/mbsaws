import React from 'react';
import Dashboard from './dashboard/Index';
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from '../node_modules/react-router-dom';
import { withAuthenticor, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
      <AmplifySignOut />
    </div>
  );
}

export default App;
