import React from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import "./css/Layout.css";
export const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className={`body ${pathname === "/" ? "beigeBackground" : ""}`}>
      <div className="headerOuter">
        <header>
          <Link className="logo" to="/">
            <h1 className="heading2 noLineHeight">Mia</h1>
            <div>Beta</div>
          </Link>

          <nav>
            <a href="mailto:hellomia@gmail.com" className="bodyText">
              Contact
            </a>
            <Link to="/about" className="bodyText">
              About
            </Link>
          </nav>
        </header>
      </div>
      <main>{children}</main>
    </div>
  );
};
