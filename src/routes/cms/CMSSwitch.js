import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import Blog from '../../components/content/cms/blog/blog';
import Guidelines from '../../components/content/cms/guidelines/guidelines';
import NewsBroadcast from '../../components/content/cms/newsBroadcast/newsBroadcast';

export default function CMSSwitch(props) {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/blog`}>
        <Blog {...props} />
      </Route>
      <Route path={`${path}/guidelines`}>
        <Guidelines {...props} />
      </Route>
      <Route path={`${path}/newsBroadcast`}>
        <NewsBroadcast {...props} />
      </Route>
      <Redirect from={path} to={`${path}/blog`} />
    </Switch>
  );
}
