import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Tenders from '../../components/content/tenders/tenders';
import TendersFrom from '../../components/content/tenders/tenderView';

export default function TendersSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
       <Tenders{...props}></Tenders>
      </Route>
      <Route path={`${path}/edit`}>
      <TendersFrom {...props} isEdit={true} />
    </Route>
    <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};