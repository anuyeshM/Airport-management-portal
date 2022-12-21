import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import FeedBackSwitch from './feedbackSwitch';


export default function FeedBackSwitchMain(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <FeedBackSwitch {...props} />
      </Route>
      <Redirect from={path} to={`${path}`} />
    </Switch>
  );
}