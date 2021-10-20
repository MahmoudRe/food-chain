import React from 'react';
import './App.css';
import QR from './Components/QR';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QR callback={(res) => { alert('Decode result: ' + res) }}/>
      </header>
    </div>
  );
}

export default App;
