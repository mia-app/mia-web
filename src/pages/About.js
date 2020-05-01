import React from "react";
import "../css/About.css";

import { PictureText } from "../components/PictureText";
import Problem1 from "../assets/about/Problem1.svg";
import Problem2 from "../assets/about/Problem2.svg";
import Problem3 from "../assets/about/Problem3.svg";
import Problem4 from "../assets/about/Problem4.svg";
import Solution1 from "../assets/about/Solution1.svg";
import Solution2 from "../assets/about/Solution2.svg";
import Solution3 from "../assets/about/Solution3.svg";
import Solution4 from "../assets/about/Solution4.svg";
import Solution5 from "../assets/about/Solution5.svg";
import Journaling1 from "../assets/about/Journaling1.svg";
import Journaling4 from "../assets/about/Journaling4.svg";

import { Principal } from "../components/Principal";
import Impact from "../assets/about/Impact.svg";
import Privacy from "../assets/about/Privacy.svg";
import CitizenCentric from "../assets/about/CitizenCentric.svg";
import Guidance from "../assets/about/Guidance.svg";
import PlugPlay from "../assets/about/PlugPlay.svg";

import David from "../assets/teamPhotos/David.png";
import Ale from "../assets/teamPhotos/Ale.png";
import Oli from "../assets/teamPhotos/Oli.png";
import Henry from "../assets/teamPhotos/Henry.png";
import Martin from "../assets/teamPhotos/Martin.png";
import Gabriel from "../assets/teamPhotos/Gabriel.png";
import { TeamMember } from "../components/TeamMember";

export const About = () => {
  return (
    <div className="about">
      <section>
        <h1 className="heading1">Flatten the curve</h1>
        <p className="bodyText">
          Mia is a conversational service that helps citizens with COVID-19 to
          remember the people they have been in contact with and reaching out to
          them with the appropriate advice to slow down the spread of the virus.
        </p>
      </section>

      <section>
        <h2 className="heading2">Problem</h2>
        <div className="about__pictures">
          <PictureText src={Problem1}>
            Rob has symptoms of COVID-19. He gets tested and diagnosed
            positively. He decides to go into isolation.
          </PictureText>
          <PictureText src={Problem2}>
            Before his decision of self-isolation, Rob has been exposing the
            virus to different people he met over the past 2 weeks or even more.
          </PictureText>
          <PictureText src={Problem3}>
            Some of them got infected too and if they don’t get warned, they
            will infect others and help the virus spread in an exponential rate.
          </PictureText>
          <PictureText src={Problem4}>
            If Rob quickly recommends his contacts to go into quarantine, this
            dangerous chain of contacts is blocked.
          </PictureText>
        </div>
      </section>

      <section>
        <h2 className="heading2">Solution</h2>
        <div className="about__pictures">
          <PictureText src={Solution1}>
            Rob has symptoms of COVID-19. He gets tested and diagnosed
            positively. Along with his test results he also gets introduced to
            Mia.
          </PictureText>
          <PictureText src={Solution2}>
            Mia makes Rob aware that he has the power to slow the spread of the
            virus. She guides him through the process of remember who he has
            been in contact with during his contamination period.
          </PictureText>
          <PictureText src={Solution3}>
            At the end of the process, Rob gets a list of contacts grouped by
            the level of contact and with an appropriate advice of how to
            contact them.
          </PictureText>
          <PictureText src={Solution4}>
            On the other end Robs friends get informed with an appropriate
            adivce to help slow down the spread of the virus on their side.
          </PictureText>
          <PictureText src={Solution5}>
            If Rob quickly recommends his contacts to go into quarantine,
            thisThat way Rob and his friends played an important part in slowing
            down the spread of the virus on an individual level without sharing
            any data to any authority.
          </PictureText>
        </div>
      </section>

      <section>
        <h2 className="heading2">Journaling</h2>
        <p className="bodyText">
          Mia goes even further by helping people to prepare before they
          eventually get infected.
        </p>
        <div className="about__pictures">
          <PictureText src={Journaling1}>
            Dolores, a friend of Rob, got his text message about his infection.
            They haven’t been in close contact, so the chance that Dolores got
            infected is quite small.
          </PictureText>
          <PictureText src={Solution2}>
            She gets noticed about Mia and about her help of tracking her
            contacts even before she got diagnosed with COVID-19.
          </PictureText>
          <PictureText src={Solution3}>
            She decides to download the app to her phone and pro-actively starts
            journaling her contacts day by day with the help of Mia.
          </PictureText>
          <PictureText src={Journaling4}>
            Luckily Dolores didn’t get infectived with COVID-19, but if she will
            at any point, she will be ready to notify her friends with a single
            click and therefore be even more effective in slowing the spread of
            the virus.
          </PictureText>
        </div>
      </section>

      <section>
        <h2 className="heading2">Benefits</h2>

        <div className="about__principals">
          <Principal
            src={Impact}
            title="Direct Impact"
            body="From the first user onwards"
          />
          <Principal
            src={Privacy}
            title="Privacy"
            body="No data will be shared"
          />
          <Principal
            src={CitizenCentric}
            title="Citizen-centric"
            body="Responsibility instead of surveillance"
          />
          <Principal
            src={Guidance}
            title="Guidance"
            body="Support of citizens in the difficult situation"
          />
          <Principal
            src={PlugPlay}
            title="Plug & Play"
            body="Integration in any kind of context and existing solutions"
          />
        </div>
      </section>

      <section>
        <h2 className="heading2">Team</h2>
        <p className="bodyText">
          Our mission is to equip citizens with a tool to help flatten the curve
          of epidemics, thereby preventing shutdown from the state without
          threatening privacy.
        </p>
        <p className="bodyText">
          Mia is backed by a multidisciplinary team that spotted a need to
          digitalize the process of manual contact tracing. It is a non-profit
          open-source project that suggests an alternative based on human
          recollection and creates an impact from the first user onwards.
        </p>

        <div className="about__team">
          <TeamMember
            src={David}
            name="David Roegiers"
            role="Project Management, Research"
          />

          <TeamMember
            src={Henry}
            name="Enriqueta Vallejo"
            role="Pharmoacoepidemiologist"
          />

          <TeamMember
            src={Gabriel}
            name="Gabriel Bénédict"
            role="Data Science, Backend"
          />

          <TeamMember
            src={Martin}
            name="Martin von Siebenthal"
            role="UX Design"
          />

          <TeamMember src={Ale} name="Alessandra Angelucci" role="UX Design" />

          <TeamMember src={Oli} name="Oliver Walker" role="Frontend" />
        </div>
      </section>

      <section className="about__contact">
        <p className="bodyText">
          We are seeking support from healthcare professionals, funds, and
          people who are interested to contribute.
        </p>

        <a href="hi.appmia@gmail.com" className="button">
          Get in contact
        </a>

        <p className="bodyText">
          Or have a look at our{" "}
          <a
            target="_blank"
            className="link"
            href="https://docs.google.com/presentation/d/1JNnIsVjIGH0-PKFd27wDfjX52RC4WWIsVKUUrVOs-PA/edit?usp=sharing"
            rel="noopener noreferrer"
          >
            pitch.
          </a>
        </p>
      </section>
    </div>
  );
};
