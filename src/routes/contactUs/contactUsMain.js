import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import ContactUsSwitch from './contactUsSwitch';


export default function ContactUsMain(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <ContactUsSwitch {...props} />
      </Route>
      <Redirect from={path} to={`${path}`} />
    </Switch>
  );
}