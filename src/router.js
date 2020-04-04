import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import ChatWithMia from "./pages/ChatWithMia";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/chat-with-mia">
          <ChatWithMia />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
