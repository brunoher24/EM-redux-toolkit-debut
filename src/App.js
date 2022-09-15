import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/home/Home';
import ProductDetails from './pages/productDetails/ProductDetails';
import CardItems from './pages/cardItems/CardItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="site-logo" src={logo} alt="" />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/mon-panier">Mon panier</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details-produit/:id" element={<ProductDetails/>} />
        <Route path="/mon-panier" element={<CardItems/>} />
      </Routes>
    </div>
  );
}

export default App;
