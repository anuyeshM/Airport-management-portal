import React, { useState ,useContext, useEffect, useMemo } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import StoreList from '../components/content/concessioner/subcomponent/storeList';
import StoreDetails from '../components/content/concessioner/subcomponent/storeDetails';

import Config from '../commons/config';
import { Context as PermissionsContext } from '../context/PermissionsContext';

export default function StoresSwitch(props) {
  const { path } = useRouteMatch();
  const permissionsConfig = useMemo(() => Config.permissionsConfig, []);
  const { state: permissionsState } = useContext(PermissionsContext);
  const [pagePermissionsId, setPagePermissionsId] = useState(4);
  const [pagePermissionsUrl, setPagePermissionsUrl] = useState('');

  useEffect(() => {
    getPagePermissions();
  }, []);

  function getPagePermissions() {
    permissionsState.permissionsObj.defaults && permissionsState.permissionsObj.defaults.forEach((x) => {
      if(x.assetId !== '' && x.assetName === 'Concessioner') {
        x.subAssets && x.subAssets.forEach((sub) => {
          if(sub.assetName === 'Stores') {
            setPagePermissionsId(parseInt(sub.permissionId));
            setPagePermissionsUrl(sub.apiEndPoint);
          }
        })
      }
    })
  }

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <StoreList {...props} />
      </Route>
      {pagePermissionsId >= permissionsConfig.Edit ? 
        <Route path={`${path}/details`}>
          <StoreDetails {...props} />
        </Route>
      :
        <Redirect from={`${path}/details`} to={`${path.replace('concessioner/stores', 'permissionDenied')}`} />
      }
      {pagePermissionsId >= permissionsConfig.Add ? 
        <Route path={`${path}/new`}>
          <StoreDetails {...props} />
        </Route>
      :
        <Redirect from={`${path}/new`} to={`${path.replace('concessioner/stores', 'permissionDenied')}`} />
      }
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};

