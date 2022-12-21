import React, { useEffect, useRef, useState } from 'react';
import upload from '../../assets/images/upload.png';
export default function FileInput(props) {
  const [fileName, setFileName] = useState('');
  let fileInput = useRef();

  const fileChangeEvent = (e) => {
    console.log('fileChangeEvent', e.target.files);
    0 < e.target.files.length && setFileName(e.target.files[0].name);
    0 < e.target.files.length &&
      props.setFile &&
      props.setFile(e.target.files[0]);
    e.preventDefault();
  };

  useEffect(() => {}, [fileName]);

  return (
    <div style={fiStyle.fiContainer}>
      <div style={fiStyle.displayText}>
        {fileName === '' ? (
          <div style={fiStyle.bannerPlaceholder}>Choose An Image</div>
        ) : null}
        {fileName !== '' ? (
          <div style={fiStyle.fileToUpload}>{fileName}</div>
        ) : (
          <div style={fiStyle.fileToUpload}>{fileName}</div>
        )}
        <div style={fiStyle.check}>
          <img width='70%' src={upload} />
        </div>
      </div>
      <input
        type='file'
        name='file'
        ref={(fi) => (fileInput = fi)}
        style={fiStyle.input}
        onChange={fileChangeEvent}
        accept={props.allowedExt ? props.allowedExt.join(',') : '*.*'}
      />
    </div>
  );
}

const fiStyle = {
  fiContainer: {
    position: 'relative',
    width: '65%',
    height: '100%',
    border: '1px solid #bebebe',
    borderRadius: '3pt',
    backgroundColor: '#fff',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayText: {
    position: 'absolute',
    paddingLeft: '5pt',
    color: '#828282',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  check: {
    position: 'absolute',
    right: '0px',
  },
  input: {
    position: 'absolute',
    marginTop: '-2rem',
    marginLeft: '10px',
    width: 'calc(20rem - 20px)',
    height: '10rem',
    display: 'block',
    cursor: 'pointer',
    outline: 'none',
  },
  fileToUpload: {
    fontWeight: 'bold',
    color: '#000',
    width: '85%',
    overflow: 'hidden',
    textOverFlow: 'ellipses',
    whiteSpace: 'nowrap',
  },
  bannerPlaceholder: {
    fontWeight: 'bold',
    width: '85%',
    overflow: 'hidden',
    textOverflow: 'ellipses',
    whiteSpace: 'nowrap',
  },
};
