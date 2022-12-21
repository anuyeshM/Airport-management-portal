import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import PartnersListSwitch from './partnersListSwitch';
import PartnersCategoryMaster from './partnersCategoryMasterSwitch';

export default function PartnersCategoryMasterSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/partners`}>
        <PartnersListSwitch {...props} />
      </Route>
      <Route path={`${path}/partnerMaster`}>
        <PartnersCategoryMaster {...props} />
      </Route>
      <Redirect from={path} to={`${path}/partners`} />
    </Switch>
  );
}
