import React from 'react';
import './App.css';
import QR from './Components/QR';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/qr">QR Reader</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/qr">
          <header className="App-header">
            <QR callback={(res) => { alert('Decode result: ' + res) }}/>
          </header>
        </Route>
        <Route path="/">
          {/* <Home /> */}
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
