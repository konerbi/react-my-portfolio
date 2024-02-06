import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from './Contact';
import Portfolio from './Portfolio';
import About from './About';

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-me" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  </BrowserRouter>
);

export default AppRouter;
