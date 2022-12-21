import React from "react";
import { useHistory } from "react-router-dom";
import { AuthConsumer } from "../../auth/authContext";
import Can from "../../auth/can";

import DashboardView from "./dashboardView";

import "./dashboard.css";

export default function Dashboard(props) {
  const history = useHistory();

  const requireLogin = () => {
    console.log("Require login");
    history.push("/login");
  };

  return (
    <AuthConsumer>
      {({ isAuthenticated }) =>
        isAuthenticated ? <DashboardView {...props} /> : requireLogin()
      }
    </AuthConsumer>
  );
}
