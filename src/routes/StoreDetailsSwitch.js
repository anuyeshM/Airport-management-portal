import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

import StoreMeta from "../components/content/concessioner/subcomponent/storeDetailsTabs/store";
import StoreImage from "../components/content/concessioner/subcomponent/storeDetailsTabs/image";
import StoreLocation from "../components/content/concessioner/subcomponent/storeDetailsTabs/location";
import StoreContact from "../components/content/concessioner/subcomponent/storeDetailsTabs/contact";
import ProductCategories from "../components/content/concessioner/subcomponent/storeDetailsTabs/productCategories";

const StoreDetailsSwitch = (props) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/meta`}>
        <StoreMeta {...props} data={props.data} metaData={props.metaData} renderAllTabs={props.renderAllTabs} selectedConcessioner={props.selectedConcessioner} />
      </Route>
      <Route path={`${path}/image`}>
        <StoreImage data={props.data} metaData={props.metaData} selectedConcessioner={props.selectedConcessioner} />
      </Route>
      <Route path={`${path}/location`}>
        <StoreLocation data={props.data} metaData={props.metaData} selectedConcessioner={props.selectedConcessioner} />
      </Route>
      <Route path={`${path}/contact`}>
        <StoreContact data={props.data} metaData={props.metaData} selectedConcessioner={props.selectedConcessioner} />
      </Route>
      <Route path={`${path}/productCategories`}>
        <ProductCategories data={props.data} metaData={props.metaData} selectedConcessioner={props.selectedConcessioner} />
      </Route>
      <Redirect from={path} to={`${path}/meta`} data={props.data} metaData={props.metaData} selectedConcessioner={props.selectedConcessioner} />
    </Switch>
  );
};

export default StoreDetailsSwitch;
