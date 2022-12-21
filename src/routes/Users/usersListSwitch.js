import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import UsersList from '../../components/content/users/usersList';
import UsersForm from '../../components/content/users/usersForm';

export default function UsersListSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <UsersList {...props} />
      </Route>
      <Route path={`${path}/new`}>
        <UsersForm {...props} isEdit={false} />
      </Route>
      <Route path={`${path}/edit`}>
        <UsersForm {...props} isEdit={true} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
}
