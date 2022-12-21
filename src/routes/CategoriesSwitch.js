import React, { useState ,useContext, useEffect, useMemo } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import CategoryList from '../components/content/concessioner/subcomponent/categoryList';
import AddNewCategory from '../components/content/concessioner/subcomponent/addNewCategory';

import Config from '../commons/config';
import { Context as PermissionsContext } from '../context/PermissionsContext';

export default function CategoriesSwitch(props) {
  const { path } = useRouteMatch();
  const { state: permissionsState } = useContext(PermissionsContext);
  const [pagePermissionsId, setPagePermissionsId] = useState(4);
  const [pagePermissionsUrl, setPagePermissionsUrl] = useState('');
  const permissionsConfig = useMemo(() => Config.permissionsConfig, []);

  useEffect(() => {
    getPagePermissions();
  }, []);

  function getPagePermissions() {
    permissionsState.permissionsObj.defaults && permissionsState.permissionsObj.defaults.forEach((x) => {
      if(x.assetId !== '' && x.assetName === 'Concessioner') {
        x.subAssets && x.subAssets.forEach((sub) => {
          if(sub.assetName === 'Category Master') {
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
        <CategoryList {...props} />
      </Route>
      {pagePermissionsId >= permissionsConfig.Add ?
        <Route path={`${path}/new`}>
          <AddNewCategory {...props} />
        </Route>
      :
        <Redirect from={`${path}/new`} to={`${path.replace('concessioner/categories', 'permissionDenied')}`} />
      }
      {pagePermissionsId >= permissionsConfig.Edit ? 
        <Route path={`${path}/details`}>
          <AddNewCategory {...props} />
        </Route>
      :
        <Redirect from={`${path}/details`} to={`${path.replace('concessioner/categories', 'permissionDenied')}`} />
      }
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};

