import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import Loader from '../commons/loader';

const CampaignSwitch = (props) => {
  const { path } = useRouteMatch();
  const [campaignUrl] = useState(
    'http://ecommerce.contactless-shoppingdev.com:8086/campaign/'
  );

  //   useEffect(() => {
  //     window.location.href = campaignUrl;
  //   }, []);

  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Loader />
    </div>
  );
};

export default CampaignSwitch;
