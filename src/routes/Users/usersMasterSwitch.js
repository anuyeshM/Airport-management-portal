import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import UsersMasterList from '../../components/content/users/categoryMaster/usersMasterList';
import UsersMasterForm from '../../components/content/users/categoryMaster/usersMasterForm';

export default function UsersMasterSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <UsersMasterList {...props} />
      </Route>
      <Route path={`${path}/new`}>
        <UsersMasterForm {...props} isEdit={false} />
      </Route>
      <Route path={`${path}/edit`}>
        <UsersMasterForm {...props} isEdit={true} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
}
