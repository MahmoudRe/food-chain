import React, { useCallback, useRef } from 'react';
import QrScanner from 'qr-scanner';

// eslint-disable-next-line import/no-webpack-loader-syntax
import QrScannerWorkerPath from '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
QrScanner.WORKER_PATH = QrScannerWorkerPath;

function QR({ callback = () => {} }) {

  const qrScannerRef = useRef(null)

  const elRef = useCallback(node => {
      if(node !== null && qrScannerRef.current === null)
        qrScannerRef.current = new QrScanner(node, callback);

      // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
      // React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts
      
      if (node !== null)
        qrScannerRef.current.start();
      else
        qrScannerRef.current.stop();

  }, [callback]);

  return <video ref={elRef}></video>;
}

export default QR;