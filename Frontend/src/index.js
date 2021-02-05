import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import "bootstrap/dist/css/bootstrap.css";

import App from './App';

ReactDOM.hydrate(
  <React.StrictMode>
    <App className="container"/>
  </React.StrictMode>,
  document.getElementById('root')
);
