import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import InitializeGoogleAnalytics, { TrackGoogleAnalyticsPageview } from '../services/GA';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';

InitializeGoogleAnalytics();
const AppRouter = () => {
  useEffect(() => {
    TrackGoogleAnalyticsPageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
