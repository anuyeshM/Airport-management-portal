import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import UserRegistration from '../../components/content/userRegistration/userRegistration';


export default function UserRegistrationSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path}>
       <UserRegistration{...props}></UserRegistration>
      </Route>
    </Switch>
  );
};