import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import AdBanner from '../components/content/adBanner/adBanner';
import BannerDetail from '../components/content/adBanner/subComponents/bannerDetail';

const AdBannerSwitch = (props) => {
  const { path } = useRouteMatch();
  console.log(path)

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <AdBanner {...props} />
      </Route>
      <Route path={`${path}/new`}>
        <BannerDetail {...props} />
      </Route>
      <Route path={`${path}/edit`}>
        <BannerDetail {...props} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};

export default AdBannerSwitch;
