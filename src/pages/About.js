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
        <p>
          Mia reminds Swiss citizens, that have a COVID-19 infection, to advise quarantine to their surroundings. A chatbot nudges the user to, either keep a preventive journal of, or retroactively list, the people they were in close contact with and places they visited during their period of infectivity. Mia will reach out (anonymously) by SMS to recommend the right isolation measures.
        </p>
        <p>
          Here's our <a target="_blank" href="https://docs.google.com/presentation/d/1JNnIsVjIGH0-PKFd27wDfjX52RC4WWIsVKUUrVOs-PA/edit?usp=sharing" className="link">pitch</a>.
        </p>
      </section>

      <section className="about__section">
        <h3>
        The goal is to lift the lockdown, while keeping the spread of the Corona virus under control. 
        </h3>
        <p>
          Society has proven its will to participate in the fight against corona. With Mia’s guidance, holders of the Corona virus can track their trace themselves and act in consequence.
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
      <h1>Why?</h1>
      </section>
      <section className="about__section">
          <p>
            Test-Isolate-Quarantine, or variations thereof, appears to be the right method to return to life as usual and reanimate the economy, while keeping the spread of SARS-CoV-2 under control. 
          </p>
          <p>
            Traditional and investigative contact tracing methods require much manpower and bring forth damaging delays.
          </p>
          <p>
            While imposed automatic location tracking may be seen as an effective approach, Switzerland’s liberal ecosystem prevents the state from overstepping on individuals’ privacy. Following each citizen’s footsteps using location data to manage quarantine policies, although effective, would violate that concept. 
          </p>
          <p>
            To address that issue, apps applying proximity detection to track encounters are gaining widespread attention. Their high adoption and precision requirements present quite the challenge.
          </p>
          <h1></h1>
          <h1></h1>
          <p>
            <b>We see a need to digitalize the process of manual contact tracing. Mia suggests an alternative based on human recollection, that protects privacy, and creates an impact from the first user onwards.</b>
          </p>
      </section>

      <section className="about__section">
        <h1>Mia's Principles</h1>
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
    
      <section className="about__section">
      <h1> </h1>
      </section>
      <hr></hr>
      <section className="about__section">
      <h1> </h1>
      </section>




      <section className="about__section">
        
        <p>
          Right now Mia is a <a class="link" href="#/">prototype</a>. It is modular, which means it can be integrated into any digital channel (e.g. apps, hospital homepage). To exploit the full potential of the concept, we are seeking for support from healthcare professionals, funds, and any individual that is excited to contribute.
        </p>
        <p>
          Don’t hesitate to <a href="mailto:hi.appmia@gmail.com" className="link">get in touch</a>.
        </p>
      </section>
      
    </div>
  );
};
