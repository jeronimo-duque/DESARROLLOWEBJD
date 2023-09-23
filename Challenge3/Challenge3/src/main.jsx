import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Counter from './Counter.jsx'; // Ajusta la ruta según la ubicación de tu componente Counter
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter /> {/* Agrega el componente Counter aquí */}
  </React.StrictMode>,
);