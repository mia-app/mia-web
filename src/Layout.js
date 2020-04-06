import React from "react";

import { Link } from "react-router-dom";

import "./css/Layout.css";
export const Layout = ({ children }) => {
  return (
    <div className="body">
      <header>
        <Link to="/">
          <h1 className="noLineHeight">Mia</h1>
        </Link>
        <nav>
          <Link to="/team">Team</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};
