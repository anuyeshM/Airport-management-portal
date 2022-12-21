import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import PartnersForm from '../../components/content/partners/subComponent/partnersForm';
import PartnersList from '../../components/content/partners/subComponent/partnersList';

export default function PartnersListSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <div className='partners'>
      <Switch>
        <Route path={`${path}/list`}>
          <PartnersList {...props} />
        </Route>
        <Route path={`${path}/new`}>
          <PartnersForm {...props} isEdit={false} />
        </Route>
        <Route path={`${path}/edit`}>
          <PartnersForm {...props} isEdit={true} />
        </Route>
        <Redirect from={path} to={`${path}/list`} />
      </Switch>
    </div>
  );
}
