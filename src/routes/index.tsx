import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn/Index';
import SignUp from '../pages/SignUp/Index';
import Dashboard from '../pages/Dashboard';
import Route from './Route';
import ForgotPassword from '../pages/ForgotPassword/Index';
import ResetPassword from '../pages/ResetPassword/Index';
import Profile from '../pages/Profile/Index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signUp" exact component={SignUp} />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />

    <Route path="/profile" exact component={Profile} isPrivate />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
