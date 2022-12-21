import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import PushAlert from "../../commons/notification";
import './permissionDenied.css'

export default function PermissionDenied(props) {
    const history = useHistory();
  
    // useEffect(() => {
    //     PushAlert.info(`Redirecting to home page...`);

    // setTimeout(() => {
    //     history.push('/dashboard')
    // }, 3000);
    // });

    return (
        <div className='permission-container'>
            <div className='permission-denied-icon'></div>
            <div className='permission-denied'>
                <h2>Oops!!!</h2>
                <h4>Looks like you don't have permission to access this page....</h4>
            </div>
        </div>
    )
}