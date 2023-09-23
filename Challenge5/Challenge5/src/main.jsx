import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GifGrid from './Gifgrid.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GifGrid /> {/* Renderiza el componente GifGrid o el componente principal */}

  </React.StrictMode>,
)