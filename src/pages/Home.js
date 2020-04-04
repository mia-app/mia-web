import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Hi,</h1>
      <h1 className="home__header">I'm Mia</h1>
      <p className="home__text1">
        I can help if you think you may be having symptoms of Corona and you
        need to tell the others around you.
      </p>

      <p className="home__text2">For now I am just a prototype</p>
      <p className="home__text2">~ Be easy on me! ~</p>

      <span role="img" aria-label="Mia" className="home__mia">
        🙋‍♀️
      </span>

      <div className="home__buttons">
        <Link to="/chat-with-mia" className="button">
          I Have Symptoms
        </Link>
        <Link to="/chat-with-mia" className="button">
          Record Interactions
        </Link>
      </div>
      <section className="home__section">
        <h2>If you have symptoms or have been diagnosed...</h2>
        <p>
          Sed pellentesque congue est, ut condimentum ipsum interdum sed. Nullam
          ullamcorper pharetra massa at sollicitudin. Proin sagittis lorem est,
          eu sagittis erat mattis commodo. Sed rhoncus risus vel magna hendrerit
          volutpat.
        </p>
      </section>
      <section className="home__section">
        <h2>If you want to proactively track your contacts...</h2>
        <p>
          Sed pellentesque congue est, ut condimentum ipsum interdum sed. Nullam
          ullamcorper pharetra massa at sollicitudin. Proin sagittis lorem est,
          eu sagittis erat mattis commodo. Sed rhoncus risus vel magna hendrerit
          volutpat.
        </p>
      </section>
    </div>
  );
};
