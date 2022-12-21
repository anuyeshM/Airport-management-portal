import React, { useState, useEffect } from 'react';
import { AuthProvider } from './auth/authContext';
import SessionManager from './commons/session';
import GlobalFonts from './assets/fonts/fonts';
import RootSwitch from './routes/RootSwitch';
import PushAlert from './commons/notification';
import moment from 'moment';
import './App.css';

function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: true,
   
  });

  const AuthManager = {
    ...auth,
    initiateLogin: (userObj, callback) => {

      const loggedInUser = {
        isAuthenticated: true,
      };
      SessionManager.setAuthSession(loggedInUser);
      setAuth(loggedInUser);
      callback && callback();

    },
    handleAuthentication: (navigator, navigateTo) => {
      navigator.push(navigateTo);
    },
    resetAuth: () => {
      const loggedInUser = {
        isAuthenticated: true,
      };
      SessionManager.setAuthSession(loggedInUser);
      setAuth(loggedInUser);
    },
    logout: (params) => {
      AuthManager.resetAuth();
      SessionManager.resetAuthSession();
    },
  };

  useEffect(() => {
    // on refresh, update user info to context from session
    SessionManager.getAuthSession();
  });

  return (
    <AuthProvider value={AuthManager}>
      <GlobalFonts />
      <RootSwitch />
    </AuthProvider>
  );
}

export default App;
