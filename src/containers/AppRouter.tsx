import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Switch>
    </>
  </BrowserRouter>
);

export default AppRouter;
