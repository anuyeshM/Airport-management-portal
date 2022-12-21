import React, { useState ,useContext, useEffect, useMemo } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import ConcessionerList from '../components/content/concessioner/subcomponent/concessionerList';
import ConcessionerDetails from '../components/content/concessioner/subcomponent/concessionerDetails';

import Config from '../commons/config';
import { Context as PermissionsContext } from '../context/PermissionsContext';

export default function ContractAndDetailsSwitch(props) {
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
          if(sub.assetName === 'Contract & Details') {
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
        <ConcessionerList {...props} />
      </Route>
      {pagePermissionsId >= permissionsConfig.Edit ?
        <Route path={`${path}/details`}>
          <ConcessionerDetails {...props} isEdit={true} />
        </Route> 
      :
        <Redirect from={`${path}/details`} to={`${path.replace('concessioner/contract', 'permissionDenied')}`} />
      }
      {pagePermissionsId >= permissionsConfig.Add ? 
        <Route path={`${path}/new`}>
          <ConcessionerDetails {...props} isEdit={false} />
        </Route>
      : 
        <Redirect from={`${path}/new`} to={`${path.replace('concessioner/contract', 'permissionDenied')}`} />
      }
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};

