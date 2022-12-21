import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import ContractAndDetailsSwitch from './ContractAndDetailsSwitch';
import StoresSwitch from './StoresSwitch';
import ManageCategory from './CategoriesSwitch';

export default function ConcessionersSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/contract`}>
        <ContractAndDetailsSwitch {...props} />
      </Route>
      <Route path={`${path}/stores`}>
        <StoresSwitch {...props} />
      </Route>
      <Route path={`${path}/categories`}>
        <ManageCategory {...props} />
      </Route>
      <Redirect from={path} to={`${path}/contract`} />
    </Switch>
  );
};

