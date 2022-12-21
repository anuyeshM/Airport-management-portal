import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import CategoryList from '../../components/content/cms/blog/subcomponent/blogCategoryList';
import AddNewCategory from '../../components/content/cms/blog/subcomponent/blogCategoryForm';


export default function CategoriesSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <CategoryList {...props} />
      </Route>
      <Route path={`${path}/addCategory`}>
        <AddNewCategory {...props} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};

