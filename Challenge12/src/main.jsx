import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext';
import './index.css'
import PrivateRoute from './PrivateRoute';
import {Home} from './pages/home/Home';
import {Registro} from './pages/registro/Registro';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Registro />} />
        <Route element={<PrivateRoute children={<Home />} />}>
            <Route path="/" element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
)
