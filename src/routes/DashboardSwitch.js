import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import Concessioners from '../components/content/concessioner/concessioners';
import MainBoard from '../components/content/AdminDashboard/AdminDashBoard';
import BannerSwitch from '../components/content/adBanner/bannerSwitch';
import UsersSwitch from './Users/UsersSwitch';
import Partners from '../components/content/partners/partners';
import CMS from '../components/content/cms/cms';
import CampaignSwitch from './CampaignSwitch';
import MasterData from '../components/content/masterData/masterData';
import PermissionDenied from '../pages/permissionDenied/permissionDenied';
import TendersSwitch from './tenders/tendersSwitch';
import FeedBackSwitch from './feedback/feedbackSwitch';
import ContactUsSwitch from './contactUs/contactUsSwitch';
import LostandFoundSwitch from './lostandfoundclaims/switchLostandFoundclaims';
import UserRegistrationSwitch from './userregistration/userregistrationSwitch'


const DashboardSwitch = (props) => {
  const { path } = useRouteMatch();
  return (
      <Switch>
        <Route path={`${path}/concessioner`}>
          <Concessioners {...props} />
        </Route>
        <Route path={`${path}/adBanner`}>
          <BannerSwitch {...props} />
        </Route>
        <Route path={`${path}/partner`}>
          <Partners {...props} />
        </Route>
        <Route path={`${path}/cms`}>
          <CMS {...props} />
        </Route>
        <Route path={`${path}/masterData`}>
          <MasterData {...props} />
        </Route>
        <Route path={`${path}/user`}>
          <UsersSwitch {...props} />
        </Route>
        <Route path={`${path}/campaign`}>
          <CampaignSwitch {...props} />
        </Route>
        <Route path={`${path}/permissionDenied`}>
          <PermissionDenied {...props} />
        </Route>
        {/* <Route path={`${path}/feedback`}>
        <FeedBackSwitch {...props} />
        </Route>
        <Route path={`${path}/tenders`}>
        <TendersSwitch {...props} />
        </Route>
        <Route path={`${path}/lostandfoundclaims`}>
        <LostandFoundSwitch {...props} />
        </Route>
        <Route path={`${path}/contactus`}>
        <ContactUsSwitch {...props} />
        </Route>*/}
        <Route path={`${path}/admindashboard`}>
        <MainBoard {...props} />
        </Route> 
        <Redirect from={path} to={`${path}/admindashboard`} />
      </Switch>
  );
};

export default DashboardSwitch;
