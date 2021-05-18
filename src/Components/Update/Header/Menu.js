import React from "react";
import { Affix, Icon } from "antd";
import { Link } from "react-router-dom";
import fij from "../../../assets/fij.png";
import aju from "../../../assets/aju.png";
export default function Menu({ active = "accueil", top = 0, bottom = 10 }) {
  const redirectFij = () => {
    window.location.assign("https://www.ijf.org/");
  };

  const redirectAuj = () => {
    window.location.assign("http://africajudo.org/");
  };

  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <Affix offsetTop={top}>
      <div className="topnav" id="myTopnav">
        <div style={{ marginLeft: "50px" }}>
          <Link to="/" className={active === "accueil" ? "active" : ""}>
            ACCUEIL
          </Link>
          <Link
            to="/federation"
            className={active === "federation" ? "active" : ""}
          >
            FÉDÉRATION
          </Link>
          <Link to="/ligues" className={active === "ligues" ? "active" : ""}>
            LIGUES ET CLUBS
          </Link>
          <Link
            to="/inscription"
            className={active === "inscription" ? "active" : ""}
          >
            DEVENIR LICENCIÉ
          </Link>
          <Link
            to="/calendrier"
            className={active === "calendrier" ? "active" : ""}
          >
            CALENDRIER
          </Link>
          <Link
            to="/palmares"
            className={active === "palmares" ? "active" : ""}
          >
            RÉSULTATS
          </Link>
          <Link
            to="/mediatheque"
            className={active === "mediatheque" ? "active" : ""}
          >
            MÉDIATHÈQUE
          </Link>
          <Link to="/judo" className={active === "judo" ? "active" : ""}>
            "Le Judo s'Engage"
          </Link>
          <span
            className="cercleBarre"
            onClick={redirectFij}
            style={{ marginRight: "15px" }}
          >
            <img src={fij} alt="deux" className="ico" />
          </span>
          <span className="cercleBarre" onClick={redirectAuj}>
            <img src={aju} alt="deux" className="ico" />
          </span>
          {/* eslint-disable-next-line */}
          <a className="icon" onClick={myFunction}>
            <Icon type="unordered-list" style={{ fontSize: "15px" }} />
          </a>
        </div>
      </div>
    </Affix>
  );
}
