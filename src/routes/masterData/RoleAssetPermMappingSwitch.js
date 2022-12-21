import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

// import PermissionDetail from '../../components/content/masterData/permissions/subcomponent/permissionDetail'
import RoleAssetPermMapping from '../../components/content/masterData/roleAssetPermissionMapping/roleAssetPermMapping';
import RoleAssetPermissionMappingForm from '../../components/content/masterData/roleAssetPermissionMapping/subcomponent/roleAssetPermMappingForm';

const RoleAssetPermMappingSwitch = (props) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <RoleAssetPermMapping {...props} />
      </Route>
      <Route path={`${path}/new`}>
        <RoleAssetPermissionMappingForm {...props} />
      </Route>
      <Route path={`${path}/edit`}>
        <RoleAssetPermissionMappingForm {...props} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};

export default RoleAssetPermMappingSwitch;
