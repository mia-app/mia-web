import React from "react";
import { Link } from "react-router-dom";
import VisualizeTimeline from "../assets/visualize_timeline.png";

import MessageMia from "../assets/message_mia.png";
import GuidedProcess from "../assets/guided_process.png";

import { ReactComponent as Trust } from "../assets/trust.svg";
import { ReactComponent as Impact } from "../assets/impact.svg";
import { ReactComponent as Guidance } from "../assets/guidance.svg";

import "../css/About.css";

export const About = () => {
  return (
    <div className="about">
      <section className="about__section">
        <h1>What is Mia?</h1>
        <p>
          Mia is a chatbot that guides you in case of a COVID-19 infection:
          trace the people you were in contact with and notify them with
          appropriate advice.
        </p>
        <p>
          Try out our{" "}
          <Link to="/" className="link">
            prototype
          </Link>{" "}
          or discover our <a className="link">pitch</a>.
        </p>
      </section>

      <section className="about__section">
        <h1>Goal</h1>
        <h3>
          Reduces the spread of the virus after the loosening of the lockdown
        </h3>
        <p>
          Society has proven its will to participate in the fight against
          corona. With Mia’s guidance, holders of corona virus can track their
          trace themselves and act in consequence.
        </p>
      </section>

      <section className="about__pictures">
        <div>
          <img
            src={VisualizeTimeline}
            alt="visualize your timeline"
            width={343}
            height={233}
          />
          <span>Visualize your trace of contacts in a timeline.</span>
        </div>
        <div>
          <img
            src={MessageMia}
            alt="Mia sends sms's"
            width={343}
            height={233}
          />
          <span>Easily send anonymous SMS to your contacts</span>
        </div>
        <div>
          <img
            src={GuidedProcess}
            alt="professional guidance"
            width={343}
            height={233}
          />
          <span>Guided process to trace your chain of contacts.</span>
        </div>
      </section>

      <section className="about__section">
        <h1>What we have and what we are looking forward to</h1>
        <p>
          Mia’s prototype can investigate your and contact your surroundings, in
          case of need. Mia is modular, which means it can be integrated into
          any further website (e.g. hospital main page) or app. To exploit the
          full potential of the concept, we are seeking for additional support
          from healthcare proffessionals and anyone with constructive criticism
          :)
        </p>
        <p>
          If you want to learn more or contribute to the project, please don’t
          hesitate to <a className="link">get in touch</a>.
        </p>
        <p>
          <b>Our immediate next steps</b> include turning the prototype into a
          functional mobile app integrating contacts, geolocation and enhance
          the chatbot with Artificial Intelligence
        </p>
      </section>

      <section className="about__section">
        <h1>What we care about</h1>
      </section>

      <section className="about__pictures">
        <div>
          <Trust />
          <h3>Trust</h3>
          <p>
            The users decide how much data they would like to provide and what
            happens with it
          </p>
        </div>
        <div>
          <Impact />
          <h3>Impact</h3>
          <p>
            Already the first user creates a direct impact on the spread of the
            virus for his surrounding
          </p>
        </div>
        <div>
          <Guidance />
          <h3>Guidance</h3>
          <p>The users are guided through the process by a conversational UI</p>
        </div>
      </section>
    </div>
  );
};
