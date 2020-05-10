import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

import history from "./utils/history";

import "./css/App.css";
import "./css/Components.css";

import { useSetDocumentHeight } from "./hooks/useSetDocumentHeight";

export const App = () => {
  useSetDocumentHeight();
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};
