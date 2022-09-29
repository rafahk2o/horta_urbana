import React from "react";
import "../Styles/cards.css";

import Alface1 from "../images/alf1.png";

export default function Cards() {
  return (
    <div className="card-geral">
      <div className="cards-principal1">
        <div className="card1">
          <img src={Alface1} alt="" />
          <div className="footer-card1"></div>
        </div>
        <div className="card2">
            <img src={Alface1} alt="" />
          <div className="footer-card2"></div>
        </div>
      </div>
      <div className="cards-principal2">
        <div className="card3">
        <img src={Alface1} alt="" />
          <div className="footer-card3"></div>
        </div>
        <div className="card4">
        <img src={Alface1} alt="" />
          <div className="footer-card4"></div>
        </div>
      </div>
    </div>
  );
}
