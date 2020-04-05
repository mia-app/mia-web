import React from "react";
import { motion } from "framer-motion";

export const Modal = ({ title, body, link, href, error }) => {
  return (
    <motion.div
      className={error ? "modal error" : "modal"}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <h3 className={error ? "error" : ""}>{title}</h3>
      <p className={error ? "error" : ""}>{body}</p>
      <a href={href} className="link" target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </motion.div>
  );
};
