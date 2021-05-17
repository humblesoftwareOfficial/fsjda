import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Affix, Icon } from "antd";
import FjsdaImage from "../Proprio/FskdaImage";
import Utils from "../../Utils/detectDevice";
import "./header.css";
import fij from "../../assets/fij.png";
import aju from "../../assets/aju.png";
export default class NewHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: "",
      top: 0,
      bottom: 10,
      federation: false,
      tokyo: false,
      ligues: false,
      mediatheque: false,
      gloires: false,
      inscription: false,
      judo: false,
      accueil: false,
      palmares: false,
      calendrier: false,
      espace: false,
      text: "Fédération Sénégalaise de Judo",
    };
    this.myFunction = this.myFunction.bind(this);
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  componentDidMount() {
    try {
      this.setState({
        device: Utils.DetectDevice(),
      });
      switch (this.props.active) {
        case "federation":
          this.setState({
            federation: true,
          });
          break;
        case "gloires":
          this.setState({
            gloires: true,
          });
          break;
        case "inscription":
          this.setState({
            inscription: true,
          });
          break;
        case "mediatheque":
          this.setState({
            mediatheque: true,
          });
          break;
        case "judo":
          this.setState({
            judo: true,
          });
          break;
        case "ligues":
          this.setState({
            ligues: true,
          });
          break;
        case "palmares":
          this.setState({
            palmares: true,
          });
          break;
        case "calendrier":
          this.setState({
            calendrier: true,
          });
          break;
        case "tokyo":
          this.setState({
            tokyo: true,
          });
          break;
        default:
          this.setState({
            accueil: true,
          });
          break;
      }
    } catch (err) {}
  }
  redirectFij() {
    window.location.assign("https://www.ijf.org/");
  }
  redirectAuj() {
    window.location.assign("http://africajudo.org/");
  }
  render() {
    return (
      <>
        <div className="topaffiche">
          <div className="centerHeader">
            {this.state.device === "MOBILE" ? (
              <>
                <Affix offsetTop={this.state.top}>
                  <div className="topnav" id="myTopnav">
                    <div>
                      <Link
                        to="/"
                        className={this.state.accueil ? "active" : ""}
                      >
                        ACCUEIL
                      </Link>
                      <Link
                        to="/federation"
                        className={this.state.federation ? "active" : ""}
                      >
                        FÉDÉRATION
                      </Link>
                      <Link
                        to="/ligues"
                        className={this.state.ligues ? "active" : ""}
                      >
                        LIGUES ET CLUBS
                      </Link>
                      <Link
                        to="/inscription"
                        className={this.state.inscription ? "active" : ""}
                      >
                        DEVENIR LICENCIÉ
                      </Link>
                      <Link
                        to="/calendrier"
                        className={this.state.calendrier ? "active" : ""}
                      >
                        CALENDRIER
                      </Link>
                      <Link
                        to="/palmares"
                        className={this.state.palmares ? "active" : ""}
                      >
                        RÉSULTATS
                      </Link>
                      <Link
                        to="/mediatheque"
                        className={this.state.mediatheque ? "active" : ""}
                      >
                        MÉDIATHÈQUE
                      </Link>
                      <Link
                        to="/judo"
                        className={this.state.judo ? "active" : ""}
                      >
                        "Le Judo s'Engage"
                      </Link>
                      <span
                        className="cercleBarre"
                        onClick={this.redirectFij.bind(this)}
                        style={{ marginRight: "15px" }}
                      >
                        <img src={fij} alt="deux" className="ico" />
                      </span>
                      <span
                        className="cercleBarre"
                        onClick={this.redirectAuj.bind(this)}
                      >
                        <img src={aju} alt="deux" className="ico" />
                      </span>
                      {/* eslint-disable-next-line */}
                      <a className="icon" onClick={this.myFunction}>
                        <Icon
                          type="unordered-list"
                          style={{ fontSize: "15px" }}
                        />
                      </a>
                    </div>
                  </div>
                </Affix>
                <div className="col paddinHeader">
                  <h3 style={{ color: "#FFF", fontWeight: "bold" }}>
                    {this.state.text.toUpperCase()}
                  </h3>
                  <p style={{ color: "#FFF", fontWeight: "bold" }}>
                    et Disciplines Associées
                  </p>
                  <a href="https://web.facebook.com/fsjda/" target="blank">
                    <Icon
                      type="facebook"
                      style={{ color: "#07ad01", fontSize: "30px" }}
                    />
                  </a>
                  <a
                    href="https://www.twitter.com/judo_senegal/"
                    target="blank"
                  >
                    <Icon
                      type="twitter"
                      style={{
                        color: "#face0c",
                        fontSize: "30px",
                        marginLeft: "10px",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCFjErv89WmzldnOLhsbEaig"
                    target="blank"
                  >
                    <Icon
                      type="youtube"
                      style={{
                        color: "red",
                        fontSize: "30px",
                        marginLeft: "10px",
                      }}
                    />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="row">
                  <div className="col-3 cen">
                    <a href="/">
                      <FjsdaImage />
                    </a>
                  </div>
                  <div className="col-6 cenT centText">
                    <h2 style={{ color: "#FFF", fontWeight: "bold" }}>
                      {this.state.text.toUpperCase()}
                    </h2>
                    <p style={{ color: "#FFF", fontWeight: "bold" }}>
                      et Disciplines Associées
                    </p>
                  </div>
                  <div className="col-3 cen">
                    <small>Suivez-nous</small>
                    <a href="https://web.facebook.com/fsjda/" target="blank">
                      <Icon
                        type="facebook"
                        style={{ color: "#07ad01", fontSize: "30px" }}
                      />
                    </a>
                    <a
                      href="https://www.twitter.com/judo_senegal/"
                      target="blank"
                    >
                      <Icon
                        type="twitter"
                        style={{
                          color: "#face0c",
                          fontSize: "30px",
                          marginLeft: "10px",
                        }}
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCFjErv89WmzldnOLhsbEaig"
                      target="blank"
                    >
                      <Icon
                        type="youtube"
                        style={{
                          color: "red",
                          fontSize: "30px",
                          marginLeft: "10px",
                        }}
                      />
                    </a>
                  </div>
                </div>
                <Affix offsetTop={this.state.top}>
                  <div className="topnav" id="myTopnav">
                    <div style={{ marginLeft: "50px" }}>
                      <Link
                        to="/"
                        className={this.state.accueil ? "active" : ""}
                      >
                        ACCUEIL
                      </Link>
                      <Link
                        to="/federation"
                        className={this.state.federation ? "active" : ""}
                      >
                        FÉDÉRATION
                      </Link>
                      <Link
                        to="/ligues"
                        className={this.state.ligues ? "active" : ""}
                      >
                        LIGUES ET CLUBS
                      </Link>
                      <Link
                        to="/inscription"
                        className={this.state.inscription ? "active" : ""}
                      >
                        DEVENIR LICENCIÉ
                      </Link>
                      <Link
                        to="/calendrier"
                        className={this.state.calendrier ? "active" : ""}
                      >
                        CALENDRIER
                      </Link>
                      <Link
                        to="/palmares"
                        className={this.state.palmares ? "active" : ""}
                      >
                        RÉSULTATS
                      </Link>
                      <Link
                        to="/mediatheque"
                        className={this.state.mediatheque ? "active" : ""}
                      >
                        MÉDIATHÈQUE
                      </Link>
                      <Link
                        to="/judo"
                        className={this.state.judo ? "active" : ""}
                      >
                        "Le Judo s'Engage"
                      </Link>
                      <span
                        className="cercleBarre"
                        onClick={this.redirectFij.bind(this)}
                        style={{ marginRight: "15px" }}
                      >
                        <img src={fij} alt="deux" className="ico" />
                      </span>
                      <span
                        className="cercleBarre"
                        onClick={this.redirectAuj.bind(this)}
                      >
                        <img src={aju} alt="deux" className="ico" />
                      </span>
                      {/* eslint-disable-next-line */}
                      <a className="icon" onClick={this.myFunction}>
                        <Icon
                          type="unordered-list"
                          style={{ fontSize: "15px" }}
                        />
                      </a>
                    </div>
                  </div>
                </Affix>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
