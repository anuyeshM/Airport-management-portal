import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login/login';
import ForgotPassword from '../pages/login/forgotPassword';
import Dashboard from '../pages/dashboard/dashboard';
import { Provider as PermissionsProvider } from '../context/PermissionsContext';

const RootSwitch = () => {
  return (
    <PermissionsProvider>
      <HashRouter>
        <Switch>
          <Route path="/login"          render={(props) => <Login {...props} />} />
          <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
          <Route path='/forgotPassword' render={(props) => <ForgotPassword {...props} />} />

          <Redirect from="/" to="/login" />
        </Switch>
      </HashRouter>
    </PermissionsProvider>
  );
};

export default RootSwitch;
