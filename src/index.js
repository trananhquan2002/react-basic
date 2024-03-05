import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();