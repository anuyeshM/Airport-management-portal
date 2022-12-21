import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import GuidelinesForm from '../../components/content/cms/guidelines/subComponent/guidelinesForm';
import GuidelinesList from '../../components/content/cms/guidelines/subComponent/guidelinesList';

export default function PartnersSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <GuidelinesList {...props} />
      </Route>
      <Route path={`${path}/new`}>
        <GuidelinesForm {...props} isEdit={false} />
      </Route>
      <Route path={`${path}/edit`}>
        <GuidelinesForm {...props} isEdit={true} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
}
