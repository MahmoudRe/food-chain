import React, { useCallback, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

// eslint-disable-next-line import/no-webpack-loader-syntax
import QrScannerWorkerPath from '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
QrScanner.WORKER_PATH = QrScannerWorkerPath;

function QR({ 
  callback = () => {}, 
  onDecodeError = undefined,
  swapCameraOnClick = true
 }) {

  const qrScannerRef = useRef(null);
  const [facingMode, setFacingMode] = useState(false);

  const callbackRef = useCallback(node => {
      if(node && qrScannerRef.current === null)
        qrScannerRef.current = new QrScanner(node, callback, onDecodeError);

      // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
      // React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts
      
      if (node)
        qrScannerRef.current.start();
      else
        qrScannerRef.current.stop();

  }, [callback, onDecodeError]);

  return (
    <video 
      ref={callbackRef} 
      onClick={() => { 
        if (swapCameraOnClick) {
          qrScannerRef.current.setCamera(facingMode ? 'user' : 'environment')
          setFacingMode(!facingMode)
        }
      }}>
    </video>
  );
}

export default QR;