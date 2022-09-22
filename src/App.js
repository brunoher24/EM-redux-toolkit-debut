import React from 'react';
import styles from "./App.module.css";

import { Routes, Route } from 'react-router-dom';

import Toaster from './features/toast/Toaster';

import Header from './components/header/Header';
import PrivateOutlet from './components/privateOutlet/PrivateOutlet';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import ProductDetails from './pages/productDetails/ProductDetails';
import CardItems from './pages/cardItems/CardItems';





function App() {
  return (
    <div className={styles.appCtnr}>
      <Header />

      <Toaster />

      <Routes>
        <Route path="/connexion" element={<Login />} />
        <Route path="*" element={<PrivateOutlet />}>
          <Route path="" element={<Home />} />
          <Route path="details-produit/:id" element={<ProductDetails />} />
          <Route path="mon-panier" element={<CardItems />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
