import React from 'react';
import '../elements.css';

const Status = (props) => {
  // console.log('status', props.isActive);
  return (
    <div
      className='status-container'
      style={{
        height: props.height ? props.height : null,
        width: props.width ? props.width : null,
      }}
      onClick={() => props.activeSetter(!props.isActive)}>
      <div
        className='active-container'
        style={{
          backgroundColor: props.isActive ? '#3aca82' : null,
          color: props.isActive ? 'white' : null,
        }}>
        {props.leftText}
      </div>
      <div
        className='inactive-container'
        style={{
          backgroundColor: !props.isActive ? '#818181' : null,
          color: !props.isActive ? 'white' : null,
        }}>
        {props.rightText}
      </div>
    </div>
  );
};

export default Status;
