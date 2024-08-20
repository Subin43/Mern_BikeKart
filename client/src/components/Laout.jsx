// src/components/Layout.js
import React from 'react';
import Nav from './Navbar/Nav';
import Footer from './footer/Footer';


const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
