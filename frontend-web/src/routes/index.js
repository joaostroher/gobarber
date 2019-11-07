import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignOut from '../pages/SignOut';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignOut} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/Profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
