import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import PartnersCategoryMasterForm from '../../components/content/partners/categoryMaster/partnersCategoryMasterForm';
import PartnersCategoryMasterList from '../../components/content/partners/categoryMaster/partnersCategoryMasterListing';

export default function PartnersListSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <div className='partners-category'>
      <Switch>
        <Route path={`${path}/list`}>
          <PartnersCategoryMasterList {...props} />
        </Route>
        <Route path={`${path}/new`}>
          <PartnersCategoryMasterForm {...props} isEdit={false} />
        </Route>
        <Route path={`${path}/edit`}>
          <PartnersCategoryMasterForm {...props} isEdit={true} />
        </Route>
        <Redirect from={path} to={`${path}/list`} />
      </Switch>
    </div>
  );
}
