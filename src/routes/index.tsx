import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn/Index';
import SignUp from '../pages/SignUp/Index';
import Dashboard from '../pages/Dashboard';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signUp" exact component={SignUp} />

    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
