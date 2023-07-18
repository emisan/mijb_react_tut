import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginModul from './LoginModul';
import App from './App';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginModul />} />
        <Route path="/app/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);