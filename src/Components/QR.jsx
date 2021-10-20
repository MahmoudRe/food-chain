import React, { useCallback } from 'react';
import QrScanner from 'qr-scanner';

// eslint-disable-next-line import/no-webpack-loader-syntax
import QrScannerWorkerPath from '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
QrScanner.WORKER_PATH = QrScannerWorkerPath;

function QR({ callback = () => {} }) {

  const elRef = useCallback(node => {
      if (node !== null) {
        const qrScanner = new QrScanner(node, callback);
        qrScanner.start();
      }
  }, [callback]);

  return <video ref={elRef}></video>;
}

export default QR;