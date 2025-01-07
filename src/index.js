import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/global.css";
import Home from "./pages/home";
import Sidebar from './components/sidebar';
import Pesquisa from './pages/pesquisa';
import Favoritos from './pages/favoritos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Sidebar />    
      <Home />  
    </>         
);



