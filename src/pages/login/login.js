import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect";
import AuthContext from "../../auth/authContext";
import SessionManager from "../../commons/session";
import LoginSwitch from "../../routes/LoginSwitch";
import AirportLogo from "../../assets/images/Logo1.png";
import "./login.css";         

export default function Login(props) {
  const history = useHistory();
  const AuthManager = useContext(AuthContext);

  const checkPreviousLogin = () => {
    const loginRecord = SessionManager.getAuthSession();

    if (loginRecord && Object.keys(loginRecord).length > 0) {
      if (
        SessionManager.isSessionValid(
          loginRecord.data.data.expiresAt || loginRecord.data.token.expires_in
        )
      )
        AuthManager.initiateLogin(loginRecord.data, () =>
          AuthManager.handleAuthentication(history, "/dashboard")
        );
    }
  };

  return (
    <div data-id="login-page" className="login-page">
      <div className="login-form">
        <div className="login-view-area">
          <div className="login-title-container">
            <img src={AirportLogo} />
            <span className="login-title">
              {" "}
              <Typewriter
                options={{
                  strings: ["Admin Portal"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <div className="dynamic-form">
            <LoginSwitch {...props} passIfLoggedIn={checkPreviousLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}
