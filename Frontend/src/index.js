import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import "bootstrap/dist/css/bootstrap.css";

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App className="container"/>
  </React.StrictMode>,
  document.getElementById('root')
);
