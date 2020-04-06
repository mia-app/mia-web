import React from "react";

import "../css/Team.css";
import David from "../assets/David.png";
import Ale from "../assets/Ale.png";
import Oli from "../assets/Oli.png";
import Henry from "../assets/Henry.png";
import Martin from "../assets/Martin.png";
import Thomas from "../assets/Thomas.png";
import Gabriel from "../assets/Gabriel.png";

export const Team = () => {
  return (
    <div className="team">
      <div className="team__content">
        <h1>The Team</h1>

        <p>
          <span>5</span> countries
        </p>

        <p>
          <span>3</span> Swiss language regions
        </p>

        <p>
          <span>Lots</span> of talent and innovative power
        </p>
      </div>
      <section className="team__photos_section">
        <div className="team_photo">
          <img src={David} alt="David Roegiers" />
          <p>David Roegiers</p>
          <span>PM, Research</span>
        </div>

        <div className="team_photo">
          <img src={Oli} alt="Oliver Walker" />
          <p>Oliver Walker</p>
          <span>Frontend</span>
        </div>

        <div className="team_photo">
          <img src={Martin} alt="Martin von Siebenthal" />
          <p>Martin von Siebenthal</p>
          <span>UX Design</span>
        </div>

        <div className="team_photo">
          <img src={Gabriel} alt="Gabriel Bénédict" />
          <p>Gabriel Bénédict</p>
          <span>Data Science, Backend</span>
        </div>

        <div className="team_photo">
          <img src={Ale} alt="Alessandra Angelucci" />
          <p>Alessandra Angelucci</p>
          <span>UX Design</span>
        </div>

        <div className="team_photo">
          <img src={Henry} alt="Enriqueta Vallejo" />
          <p>Enriqueta Vallejo</p>
          <span>Pharmoacoepidemiologist</span>
        </div>

        <div className="team_photo">
          <img src={Thomas} alt="Thomas Blank" />
          <p>Thomas Blank</p>
          <span>Development</span>
        </div>
      </section>
    </div>
  );
};
