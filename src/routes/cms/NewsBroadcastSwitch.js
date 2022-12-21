import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import NewsForm from '../../components/content/cms/newsBroadcast/subcomponent/newsForm';
import NewsList from '../../components/content/cms/newsBroadcast/subcomponent/newsList';

export default function NewsSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <NewsList {...props} />
      </Route>
      <Route path={`${path}/details`}>
        <NewsForm {...props} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
}
