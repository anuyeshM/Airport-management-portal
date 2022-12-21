import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import RolesForm from '../../components/content/masterData/userRoles/subcomponent/userRolesForm';
import RolesList from '../../components/content/masterData/userRoles/subcomponent/userRolesList';

export default function UserRolesSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <RolesList {...props} />
      </Route>
      <Route path={`${path}/details`}>
        <RolesForm {...props} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
}
