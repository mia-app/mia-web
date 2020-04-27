import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "./Layout";

import { Home } from "./pages/Home";

import "./css/App.css";
import "./css/Components.css";

import { About } from "./pages/About";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
        </Switch>

        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};
