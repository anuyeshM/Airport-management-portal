import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import TendersSwitchMain from '../routes/tenders/tenderSwtichMain';
import FeedBackSwitchMain from '../routes/feedback/feedBackSwitchMain';
import ContactUsMain from '../routes/contactUs/contactUsMain';
import UserRegistrationSwitch from '../routes/userregistration/userregistrationSwitch';
import LostandFoundclaimsMain from '../routes/lostandfoundclaims/lostandfoundclaimsMain';

export default function AdminDashboard(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/tenders`}>
       <TendersSwitchMain{...props}></TendersSwitchMain>
      </Route>
      <Route path={`${path}/feedback`}>
      <FeedBackSwitchMain {...props} isEdit={true} />
      </Route>
       <Route path={`${path}/contactus`}>
       <ContactUsMain {...props} isEdit={true} />
       </Route>
        <Route path={`${path}/userregistration`}>
        <UserRegistrationSwitch {...props} isEdit={true} />
        </Route>
         <Route path={`${path}/lostandfoundclaims`}>
         <LostandFoundclaimsMain {...props} isEdit={true} />
         </Route>
    <Redirect from={path} to={`${path}/tenders`} />
    </Switch>
  );
};