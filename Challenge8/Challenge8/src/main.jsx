import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Son from './Son.jsx'
import Father from './Father.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Son />
    <Father />
  </React.StrictMode>,
)
