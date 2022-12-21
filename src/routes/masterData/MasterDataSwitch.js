import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import AppTypeSwitch from './AppTypeSwitch';
import UserRoles from '../../components/content/masterData/userRoles/userRoles';
import TechnicalAssets from './AssetDetailSwitch'
import PermissionSwitch from './PermissionSwitch'
import RoleAssetPermMappingSwitch from './RoleAssetPermMappingSwitch';

export default function MasterDataSwitch(props) {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/appType`}>
        <AppTypeSwitch {...props} />
      </Route>
      <Route path={`${path}/userRoles`}>
        <UserRoles {...props} />
      </Route>
      <Route path={`${path}/technicalAssets`}>
        <TechnicalAssets {...props} />
      </Route>
      <Route path={`${path}/roleAssetPermMapping`}>
        <RoleAssetPermMappingSwitch {...props} />
      </Route>
      <Route path={`${path}/permissions`}>
        <PermissionSwitch {...props} />
      </Route>
      <Redirect from={path} to={`${path}/appType`} />
    </Switch>
  );
}
