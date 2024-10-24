// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css'; // Якщо є глобальні стилі

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
