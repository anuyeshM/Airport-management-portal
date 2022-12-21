import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import LostandFoundClaims from '../../components/content/LostandFoundClaims/LostandFound';
import LostandFoundClaimsView from '../../components/content/LostandFoundClaims/LostandFoundView';

export default function LostandFoundSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
       <LostandFoundClaims{...props}></LostandFoundClaims>
      </Route>
      <Route path={`${path}/view`}>
      <LostandFoundClaimsView{...props}></LostandFoundClaimsView>
     </Route>
     <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};