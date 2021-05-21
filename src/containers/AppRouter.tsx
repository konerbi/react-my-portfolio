import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Navbar from '../components/Navbar';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <>
      {/*<MainHeader/>*/}
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>
);

export default AppRouter;
