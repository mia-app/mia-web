import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TickText } from "../components/TickText";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as SunBirds } from "../assets/sun_birds.svg";
import { ReactComponent as Mia } from "../assets/mia.svg";

import Symptoms from "../ChatBots/Symptoms";
import Prevention from "../ChatBots/Prevention";

import "../css/Home.css";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const Home = () => {
  const [chatbot, setChatbot] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.background = chatbot ? "#F2F2F2" : "white";
    return () => (body.style.background = "white");
  }, [chatbot]);

  useOutsideClick(ref, () => (chatbot ? setChatbot("") : undefined));

  return (
    <div className="home__landing">
      <Mia className="home__mia" />
      <Sun className="home__sun" />
      <SunBirds className="home__sun__birds" />

      {chatbot && (
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
          {chatbot === "SYMPTOMS" ? <Symptoms /> : <Prevention />}
        </motion.div>
      )}

      <AnimatePresence>
        {!chatbot && (
          <div className="home__content">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
              }}
              className="home__header__section"
            >
              <h1 className="home__header noLineHeight">Hi, I'm Mia.</h1>
              <h1 className="home__header">Help me flatten the curve.</h1>
            </motion.div>

            <motion.div
              className="ticktexts"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: !chatbot ? 0.5 : 0,
                duration: 0.5,
              }}
            >
              <TickText>
                Reduce the spread of the virus by blocking the chain of contacts
              </TickText>
              <TickText>Notify contacts if you get infected.</TickText>
              <TickText>Pro-actively keep track of contacts.</TickText>
            </motion.div>
            <motion.div
              className="home__buttons"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: !chatbot ? 1 : 0,
              }}
            >
              <button className="button" onClick={() => setChatbot("SYMPTOMS")}>
                I Think I Have Symptoms
              </button>
              <button
                className="button"
                onClick={() => setChatbot("PREVENTION")}
              >
                Track Contacts
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
