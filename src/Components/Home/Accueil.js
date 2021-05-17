import React, { Component } from "react";
import Header from "../Utils/Header";
import { Layout } from "antd";
import Content from "./Content";
import BarreEvenements from "../Evenements/BarreEvenements";
import "./styles/design.scss";
import "antd/dist/antd.css";
import Footer from "../Utils/Footer";
import Partenaires from "../Partenaires/Partenaires";
import PresentationJudoSengage from "./PresentationJudoSengage";
import AccesRapide from "./AccueilAccessCard";
import SocialNetworks from "./SocialNetworks";
import ActualitesVideos from "../Actualites/ActualitesVideos/ActualiteVideosContent";
import pub from "../../assets/fsjda/pub.png";
import "./pub.css"
export default class Accueil extends Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  onClose() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  render() {
    return (
      <Layout>
        <Header fixed={true}></Header>
        <Content></Content>
        <BarreEvenements />
        <ActualitesVideos />
        <AccesRapide />

        <PresentationJudoSengage />
        <SocialNetworks />
        <Partenaires />

        <Footer></Footer>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={this.onClose}>&times;</span>
            <img alt="c_a_j_2021" src={pub}/>
          </div>
        </div>
      </Layout>
    );
  }
}
