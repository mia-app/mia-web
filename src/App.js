import React from "react";
import "./App.css";
import { AppRouter } from "./router";
import { Layout } from "./Layout";

function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
