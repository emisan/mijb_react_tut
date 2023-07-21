import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.min.css';
import LoginModul from './LoginModul';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <LoginModul/>
  </React.StrictMode>
);