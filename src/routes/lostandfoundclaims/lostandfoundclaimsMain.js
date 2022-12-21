import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import LostandFoundSwitch from './switchLostandFoundclaims';


export default function LostandFoundclaimsMain(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <LostandFoundSwitch {...props} />
      </Route>
      <Redirect from={path} to={`${path}`} />
    </Switch>
  );
}