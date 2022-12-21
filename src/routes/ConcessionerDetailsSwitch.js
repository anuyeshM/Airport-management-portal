import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

import ConcessionerMeta from "../components/content/concessioner/subcomponent/concessionerDetailsTabs/concessionerMeta";
import ConcessionerContract from "../components/content/concessioner/subcomponent/concessionerDetailsTabs/concessionerContract";
import ConcessionerContact from "../components/content/concessioner/subcomponent/concessionerDetailsTabs/concessionerContact";
import ConcessionerAddress from "../components/content/concessioner/subcomponent/concessionerDetailsTabs/concessionerAddress";
import ConcessionerTax from "../components/content/concessioner/subcomponent/concessionerDetailsTabs/concessionerTax";

const ConcessionerDetailsSwitch = (props) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/meta`}>
        <ConcessionerMeta {...props} data={props.data} metaData={props.metaData} renderAllTabs={props.renderAllTabs} />
      </Route>
      <Route path={`${path}/contract`}>
        <ConcessionerContract data={props.data} metaData={props.metaData} />
      </Route>
      <Route path={`${path}/contact`}>
        <ConcessionerContact data={props.data} metaData={props.metaData} />
      </Route>
      <Route path={`${path}/address`}>
        <ConcessionerAddress data={props.data} metaData={props.metaData} />
      </Route>
      <Route path={`${path}/tax`}>
        <ConcessionerTax data={props.data} metaData={props.metaData} />
      </Route>
      <Redirect from={path} to={`${path}/meta`} data={props.data} metaData={props.metaData} />
    </Switch>
  );
};

export default ConcessionerDetailsSwitch;
