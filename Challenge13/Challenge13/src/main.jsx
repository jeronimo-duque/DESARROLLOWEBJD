import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import App from './App'
import { MainApp } from './components/MainApp'
import { TodoApp } from './components/TodoApp'
import PrivateRoute from './components/PrivateRoute';
import Login from './Login'
import Home from './Home'
import { Provider } from 'react-redux'
import { store } from '../store/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)