import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="home__landing">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="home__header">Hi, I'm Mia</h1>
      </motion.div>
      <div className="home__content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <p className="home__text">
            For now I'm just a prototype, but I can guide you, if you think you
            may be having symptoms of Corona.
          </p>
          <p className="home__text">
            Or I can help you to keep track of your contacts to keep us all safe
            and stop the virus spreading!
          </p>
        </motion.div>

        <motion.div
          className="home__buttons"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
        >
          <Link to="/symptoms" className="button">
            I Think I Have Symptoms
          </Link>
          <Link to="/prevention" className="button">
            Track Contacts
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
