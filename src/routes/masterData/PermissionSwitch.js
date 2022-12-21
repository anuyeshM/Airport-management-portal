import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import PermissionDetail from '../../components/content/masterData/permissions/subcomponent/permissionDetail'
import Permissions from '../../components/content/masterData/permissions/permissions';

const PermissionSwitch = (props) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <Permissions {...props} />
      </Route>
      <Route path={`${path}/new`}>
        <PermissionDetail {...props} />
      </Route>
      <Route path={`${path}/edit`}>
        <PermissionDetail {...props} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};

export default PermissionSwitch;
