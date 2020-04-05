import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Close } from "../assets/close.svg";

export const Modal = ({ title, body, link, href, error }) => {
  const [isOpen, setItOpen] = useState(true);
  if (!isOpen) return null;
  return (
    <motion.div
      className={error ? "modal error" : "modal"}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <button onClick={() => setItOpen(false)} aria-label="close">
        <Close />
      </button>
      <h3 className={error ? "error" : ""}>{title}</h3>
      <p className={error ? "error" : ""}>{body}</p>
      <a href={href} className="link" target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </motion.div>
  );
};
