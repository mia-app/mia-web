import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TickText } from "../components/TickText";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as SunBirds } from "../assets/sun_birds.svg";
import { ReactComponent as Mia } from "../assets/mia.svg";
import { ReactComponent as Woman } from "../assets/woman.svg";


import Symptoms from "../ChatBots/Symptoms";

import "../css/Home.css";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const Home = () => {

  const ref = useRef(null);

  useOutsideClick(ref, () => null);

  return (
    <div className="home__landing">

      <Woman className="woman"/>
      <div className="centerpiece">
        <motion.div
          ref={ref}
          className="home__chatbot"
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          <Symptoms />
        </motion.div>
        <motion.div
              className="ticktexts"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
            >
              <TickText>
                <b>Direct impact</b> by blocking the spread of the virus.
              </TickText>
              <TickText><b>Privacy</b>: your data never leaves your phone.</TickText>
              <TickText><b>Citizen-centric</b>: take matters into your own hands.</TickText>
            </motion.div>
      </div>
    </div>
  );
};
