import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-me" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>
);

export default AppRouter;
