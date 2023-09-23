import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import FirstApp from './FirstApp.jsx'; // Importa el componente FirstApp
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp /> {/* Agrega el componente FirstApp aquí */}
  </React.StrictMode>,
);