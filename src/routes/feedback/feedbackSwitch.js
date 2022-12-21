import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Feedback from "../../components/content/feedback/feedback";
import FeedbackFrom from "../../components/content/feedback/feedbackView";
export default function FeedBackSwitch(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/list`}>
      <Feedback {...props}></Feedback>
      </Route>
      <Route path={`${path}/info`}>
      <FeedbackFrom {...props} isEdit={true} />
      </Route>
    <Redirect from={path} to={`${path}/list`} />
    </Switch>
  );
}
