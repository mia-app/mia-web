import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as Mia } from "./assets/mia2.svg";

export const Layout = ({ children }) => {
  return (
    <div className="layout__outer">
      <motion.div
        className="layout__content__left"
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: -250 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
        }}
      >
        <Mia />
      </motion.div>
      <div className="layout__inner">{children}</div>
      <motion.div
        className="layout__content__right"
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 450 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
        }}
      >
        <p>Reduce the spread of the virus by blocking the chain of contacts.</p>
        <p>Notify contacts if you get infected.</p>
        <p>Pro-actively keep track of contacts.</p>
      </motion.div>
    </div>
  );
};
