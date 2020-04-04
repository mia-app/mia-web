import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Hi I'm Mia</h1>
      <div className="home__buttons">
        <Link to="/chat-with-mia" className="button">
          I Have Symptoms
        </Link>
      </div>
    </div>
  );
};
