import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Affix, Icon } from "antd";
import FjsdaImage from "../Proprio/FskdaImage";
import Utils from "../../Utils/detectDevice";
import "./header.css";
import fij from "../../assets/fij.png";
import aju from "../../assets/aju.png";
import Header from "../Update/Header";
import Menu from "../Update/Header/Menu";
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
                <Header mobile={true} />
                <Menu active={this.props.active} />
              </>
            ) : (
              <>
                <Header />
                <Menu active={this.props.active} />
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
