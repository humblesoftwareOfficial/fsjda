import React from "react";
import { Link } from "react-router-dom";
import ico_un from "../../../../assets/icones/1.png";
import ico_deux from "../../../../assets/icones/2.png";
import tokyo from "../../../../assets/icones/tokyo.png";
import ico_quatre from "../../../../assets/icones/4.png";
import ico_cinq from "../../../../assets/icones/5.png";
import ico_six from "../../../../assets/icones/6.png";
import ico_sept from "../../../../assets/icones/7.png";
import ico_huit from "../../../../assets/icones/8.png";
import ico_neuf from "../../../../assets/icones/9.png";

export default function Widgets({ mobile = false }) {
  return (
    <div className="">
      {mobile ? (
        <div
          className="row"
          style={{ marginTop: "50px", marginBottom: "20px" }}
        >
          <div className="col">
            <Link to="/federation">
              <span className="cercleAccueil">
                <img src={ico_neuf} alt="un" className="ico" />
              </span>
              <small style={{ color: "#FFF", marginLeft: "2px" }}>
                FÉDÉRATION
              </small>
            </Link>
          </div>
          <div className="col">
            <Link to="/inscription">
              <span className="cercleAccueil">
                <img src={ico_deux} alt="un" className="ico" />
              </span>
              <small style={{ color: "#FFF", marginLeft: "2px" }}>
                INSCRIPTION
              </small>
            </Link>
          </div>
          <div className="col">
            <Link to="/clubs">
              <span className="cercleAccueil">
                <img src={ico_un} alt="un" className="ico" />
              </span>
              <small style={{ color: "#FFF" }}>CLUBS</small>
            </Link>
          </div>
          <div className="col">
            <Link to="/palmares">
              <span className="cercleAccueil">
                <img src={ico_six} alt="deux" className="ico" />
              </span>
              <small style={{ color: "#FFF" }}>PALMARÈS</small>
            </Link>
          </div>
          <div className="col">
            <Link to="/mediatheque">
              <span className="cercleAccueil">
                <img src={ico_sept} alt="un" className="ico" />
              </span>
              <small style={{ color: "#FFF", marginRight: "2px" }}>
                MÉDIATHÈQUE
              </small>
            </Link>
          </div>
          <div className="col">
            <Link to="/calendrier">
              <span className="cercleAccueil">
                <img src={ico_cinq} alt="un" className="ico" />
              </span>
              <small style={{ color: "#FFF", marginRight: "2px" }}>
                CALENDRIER
              </small>
            </Link>
          </div>
          <div className="col">
            <Link to="/judo">
              <span className="cercleAccueil">
                <img src={ico_huit} alt="un" className="ico" />
              </span>
              <small style={{ color: "#FFF", marginRight: "2px" }}>
                Le Judo s'Engage
              </small>
            </Link>
          </div>
          <div className="col">
            <Link to="/gloires">
              <span className="cercleAccueil">
                <img src={ico_quatre} alt="un" className="ico" />
              </span>
              <small style={{ color: "#FFF", marginRight: "2px" }}>
                GLOIRES
              </small>
            </Link>
          </div>
          <div className="col">
            <Link to="/tokyo">
              <span className="cercleAccueil">
                <img src={tokyo} alt="un" className="ico" />
              </span>
              <small style={{ color: "#FFF", marginRight: "2px" }}>
                ROAD TO TOKYO
              </small>
            </Link>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      ) : (
        <div className="row">
          <div className="col">
            <Link to="/federation">
              <span className="cercleAccueilWeb">
                <img src={ico_neuf} alt="un" className="ico" />
              </span>
              <p style={{ color: "#FFF", marginLeft: "2px" }}>FÉDÉRATION</p>
            </Link>
          </div>
          <div className="col">
            <Link to="/inscription">
              <span className="cercleAccueilWeb">
                <img src={ico_deux} alt="un" className="ico" />
              </span>
              <p style={{ color: "#FFF", marginLeft: "2px" }}>INSCRIPTION</p>
            </Link>
          </div>
          <div className="col">
            <Link to="/clubs">
              <span className="cercleAccueilWeb">
                <img src={ico_un} alt="un" className="ico" />
              </span>
              <p style={{ color: "#FFF" }}>CLUBS</p>
            </Link>
          </div>
          <div className="col">
            <Link to="/palmares">
              <span className="cercleAccueilWeb">
                <img src={ico_six} alt="deux" className="ico" />
              </span>
              <p style={{ color: "#FFF" }}>PALMARÈS</p>
            </Link>
          </div>
          <div className="col">
            <Link to="/mediatheque">
              <span className="cercleAccueilWeb">
                <img src={ico_sept} alt="un" className="ico" />
              </span>
              <p style={{ color: "#FFF", marginRight: "2px" }}>MÉDIATHÈQUE</p>
            </Link>
          </div>
          <div className="col">
            <Link to="/calendrier">
              <span className="cercleAccueilWeb">
                <img src={ico_cinq} alt="un" className="ico" />
              </span>
              <p style={{ color: "#FFF", marginRight: "2px" }}>CALENDRIER</p>
            </Link>
          </div>
          <div className="col">
            <Link to="/judo">
              <span className="cercleAccueilWeb">
                <img src={ico_huit} alt="un" className="ico" />
              </span>
              <p style={{ color: "#FFF", marginRight: "2px" }}>
                Le Judo s'Engage
              </p>
            </Link>
          </div>
          <div className="col">
            <Link to="/gloires">
              <span className="cercleAccueilWeb">
                <img src={ico_quatre} alt="un" className="ico" />
              </span>
              <p style={{ color: "#FFF", marginRight: "2px" }}>GLOIRES</p>
            </Link>
          </div>
          <div className="col">
            <Link to="/tokyo">
              <span className="cercleAccueilWeb">
                <img src={tokyo} alt="un" className="ico" />
              </span>
              <p style={{ color: "#FFF", marginRight: "2px" }}>ROAD TO TOKYO</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
