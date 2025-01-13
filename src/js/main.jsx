import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Cart from './components/Cart';
import Form from './components/Form';
import Peliculas from './components/Peliculas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Peliculas />
  </React.StrictMode>,
)
