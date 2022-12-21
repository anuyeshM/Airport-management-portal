import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../auth/authContext';
import CallAPI from '../../../commons/callAPI';
import Config from '../../../commons/config';
import PushAlert from '../../../commons/notification';
import TitleText from '../../../elements/text/title';
import TextInput from '../../../elements/input/textInput';
import LinkText from '../../../elements/text/link';
import PrimaryButton from '../../../elements/button/primary';
export default function MobileLogin(props) {
    const history = useHistory();
    const apiConfig = useMemo(() => Config.api, []);
    const appConfig = useMemo(() => Config.appDetails, []);
    const AuthManager = useContext(AuthContext);

    const [isRequestedOTP, setRequestedOTP] = useState(false);
    const [mobileNo, setMobileNo] = useState('+91 ');
    const [validOtp, setValidOtp] = useState('');
        useEffect(() => {
        props.passIfLoggedIn && props.passIfLoggedIn();
    }, []);
        const requestOtp = async () => {
         if(mobileNo.replace(/[^0-9]|[\s]/g, '').length === 12) {
        let apiResponse = await CallAPI.patch(apiConfig.generateOtp, {
          username: mobileNo.replace(/[^0-9]|[\s]/g, ''),
        });
    
        let responseObj = await apiResponse.json();
    
        if (200 === +responseObj.statusCode && 'success' === responseObj.status) {
          setRequestedOTP(true);
          PushAlert.success(responseObj.message || responseObj.status);
        } else {
          PushAlert.success(responseObj.message || responseObj.status);
          setRequestedOTP(true);
        }
      } else {
        PushAlert.error("Please enter a valid phone number");
      }
    };
    
    const submitOtp = async () => {
        let apiResponse = await CallAPI.patch(
          props.validationApi || apiConfig.login,
          {
            username: mobileNo.replace(/[^0-9]|[\s]/g, ''),
            password: validOtp,
            resource: appConfig.appName
          }
        );
    
        let responseObj = await apiResponse.json();
      
        if (200 === +responseObj.status && 'success' === responseObj.type) {
          // set logged in user details to context
          !props.isTentative &&
            AuthManager.initiateLogin(
              responseObj,
              props.callback
                ? () => props.callback(responseObj)
                : () => AuthManager.handleAuthentication(history, '/dashboard')
            );
    
          // check if next actions to perform
          props.nextActions && props.nextActions(responseObj);
        } else {
          PushAlert.error(responseObj.type);
        }
    };

    return (
        <div className='login-otp'>
            {isRequestedOTP ? (
                <div className='inline wrapper'>
                <TitleText className='input-text'>Enter OTP:</TitleText>
                <TextInput
                    width="210px"
                    value={validOtp}
                    onChange={(e) => setValidOtp(e.target.value)}
                    onKeyUp={(e) =>
                    'Enter' === e.key ? submitOtp() : e.preventDefault()
                    }
                />
                </div>
            ) : (
                <div className='inline wrapper'>
                    <TitleText className='input-text'>Mobile No:</TitleText>
                    <TextInput
                        width="210px"
                        value={mobileNo}
                        maxLength={14}
                        onChange={(e) => setMobileNo(e.target.value)}
                        onKeyUp={(e) =>
                        'Enter' === e.key ? requestOtp() : e.preventDefault()
                        }
                    />
                </div>
            )}
            <div className='login-action'>
                {isRequestedOTP ? (
                <PrimaryButton 
                    fontColor='#fff' 
                    onClick={submitOtp}
                >
                    OTP Verification
                </PrimaryButton>
                ) : (
                <PrimaryButton 
                    fontColor='#fff' 
                    onClick={requestOtp}
                >
                    Request OTP
                </PrimaryButton>
                )}
            </div>
        </div>
        );
}
