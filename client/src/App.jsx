// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './credentials/Signin';
import MainFAQ from './components/FAQ/MainFAQ';
import BuyBikes from './pages/buy/BuyBikes';
import AboutUs from './components/footer/aboutUs/AboutUs';
import Layout from './components/Laout';
import Refurbishemt from './components/footer/refurbishent/Refurbishemt';
import TermsConditions from './components/footer/usefulLinks/TermsConditions';
import Privacy from './components/footer/usefulLinks/Privacy';
import Sell from './pages/sell/Sell';
import Hub from './components/hub/Hub';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/signin" element={<Layout><Signin /></Layout>} />
      <Route path="/faq" element={<Layout><MainFAQ /></Layout>} />
      <Route path="/buy" element={<Layout><BuyBikes /></Layout>} />
      <Route path="/sell" element={<Layout><Sell /></Layout>} />
      <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
      <Route path="/Refurbishment" element={<Layout><Refurbishemt /></Layout>} />
      <Route path="/terms-and-conditions" element={<Layout><TermsConditions /></Layout>} />
      <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
      <Route path="/hub" element={<Layout><Hub /></Layout>} />
    </Routes>
  );
}

export default App;
