import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import ContactUs from '../../components/content/contactUs/contactUs';
 import ContactusFrom from '../../components/content/contactUs/contactUsFrom';

export default function ContactUsSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
       <ContactUs{...props}></ContactUs>
      </Route>
      <Route path={`${path}/edit`}>
      <ContactusFrom{...props}></ContactusFrom>
     </Route>
     <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
};