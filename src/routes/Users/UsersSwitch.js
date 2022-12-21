import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import UsersListSwitch from './usersListSwitch';
import UsersMasterSwitch from './usersMasterSwitch';

export default function UsersSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <UsersListSwitch {...props} />
      </Route>
      <Redirect from={path} to={`${path}`} />
    </Switch>
  );
}
