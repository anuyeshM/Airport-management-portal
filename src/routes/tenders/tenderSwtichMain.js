import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import TendersSwitch from './tendersSwitch';


export default function TendersSwitchMain(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <TendersSwitch {...props} />
      </Route>
      <Redirect from={path} to={`${path}`} />
    </Switch>
  );
}