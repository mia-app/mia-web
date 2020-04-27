import React from "react";
import { motion } from "framer-motion";
import { TickText } from "../components/TickText";

import { ReactComponent as Woman } from "../assets/woman.svg";

import Symptoms from "../ChatBots/Symptoms";

import "../css/Home.css";

export const Home = () => {
  return (
    <div className="home__landing">
      <Woman className="home__woman" />
      <div className="home__centerpiece">
        <motion.div
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
          className="home__ticktexts"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          <TickText>
            <b>Direct impact:</b> From the first user onwards
          </TickText>
          <TickText>
            <b>Privacy:</b> No data will be shared to any authority
          </TickText>
          <TickText>
            <b>Citizen-centric:</b> Responsibility instead of surveillance
          </TickText>
        </motion.div>
      </div>
    </div>
  );
};
