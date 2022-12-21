import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import BlogsForm from '../../components/content/cms/blog/subcomponent/blogForm';
import BlogsList from '../../components/content/cms/blog/subcomponent/blogList';
import BlogCategoryMaster from '../../components/content/cms/blog/subcomponent/blogCategoryMaster';

export default function BlogsSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
        <BlogsList {...props} />
      </Route>
      <Route path={`${path}/details`}>
        <BlogsForm {...props} />
      </Route>
      <Route path={`${path}/categories`}>
        <BlogCategoryMaster {...props} />
      </Route>
      <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
}
