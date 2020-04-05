import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import Symptoms from "./pages/Symptoms";
import Prevention from "./pages/Prevention";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/symptoms">
          <Symptoms />
        </Route>

        <Route path="/prevention">
          <Prevention />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
