import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../../auth/authContext';
import PushAlert from '../../../commons/notification';
import CallAPI from '../../../commons/callAPI';
import Config from '../../../commons/config';
import Typewriter from "typewriter-effect";
import TitleText from '../../../elements/text/title';
import TextInput from '../../../elements/input/textInput';
import LinkText from '../../../elements/text/link';
import PrimaryButton from '../../../elements/button/primary';
import PasswordInput from '../../../elements/input/passwordInput';

export default function EmailLogin(props) {
    const history = useHistory();
    const apiConfig = useMemo(() => Config.api, []);
    const appConfig = useMemo(() => Config.appDetails, []);
    const AuthManager = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        props.passIfLoggedIn && props.passIfLoggedIn();
      }, []);
    
    const doLogin = async () => {
        let apiResponse = await CallAPI.patch(apiConfig.login, {
            username: email,
            password,
            resource: appConfig.appName
        });
    
        let responseObj = await apiResponse.json();
    
        if (200 === +responseObj.status && 'success' === responseObj.type) {
          AuthManager.initiateLogin(responseObj, () =>
            AuthManager.handleAuthentication(history, '/dashboard')
          );
        } else {
          PushAlert.error(responseObj.type || responseObj.message);
        }
    };

    return (
        <div className='login-email'>
            <div className='inline wrapper'>
                <TitleText className='input-text'>Mobile:</TitleText>
                <TextInput
                    width='210px'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='inline wrapper'>
                <TitleText className='input-text'>Password:</TitleText>
                <PasswordInput
                    style={{ width: '210px' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyUp={(e) => ('Enter' === e.key ? doLogin() : e.preventDefault())}
                />
            </div>
            <div className='login-options'>
                <LinkText
                    textAlign='left'
                    onClick={(e) => history.push(`/login/mobile`)}
                >
                    Login with OTP
                </LinkText>
                {/* <LinkText
                    textAlign='left'
                    onClick={(e) => history.push(`/forgotPassword`)}
                    fontColor={'#788083'}
                >
                    Forgot Password?
                </LinkText> */}
            </div>
            <div className='login-action'>
                <PrimaryButton 
                    fontColor='#fff' 
                    onClick={doLogin}
                >
                  Log In
                </PrimaryButton>
            </div>
        </div>
        );
    }
