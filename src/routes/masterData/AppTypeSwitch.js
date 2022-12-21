import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import AppType from '../../components/content/masterData/appType/apptype';
import AppTypeForm from '../../components/content/masterData/appType/appTypeForm';

export default function AppTypeSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <AppType {...props} />
      </Route>
      <Route path={`${path}/new`}>
        <AppTypeForm {...props} isEdit={false} />
      </Route>
      <Route path={`${path}/edit`}>
        <AppTypeForm {...props} isEdit={true} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
}
