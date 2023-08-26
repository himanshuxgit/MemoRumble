// src/main.js
import React from 'react';
import ReactDOM from 'react-dom';
import CritterGame from './components/CritterGame'; // Adjust the path
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CritterGame />
  </React.StrictMode>,
  document.getElementById('root')
);
