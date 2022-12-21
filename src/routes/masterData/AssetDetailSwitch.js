import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import AddAssetDetail from '../../components/content/masterData/technicalAssets/subcomponent/addAssetDetail.js'
import AssetDetail from '../../components/content/masterData/technicalAssets/technicalAssets';

const TechnicalAssetSwitch = (props) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <AssetDetail {...props} />
      </Route>
      <Route path={`${path}/new`} >
        <AddAssetDetail {...props} isEdit={false} />
      </Route>
      <Route path={`${path}/edit`}>
        <AddAssetDetail {...props} isEdit={true} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};

export default TechnicalAssetSwitch;
