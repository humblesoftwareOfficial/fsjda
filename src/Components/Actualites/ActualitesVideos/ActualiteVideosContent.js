import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import VideosCard from "./ActualitesVideosCard";
import Utils from "../../../Utils/detectDevice";
import movies from "../../../Helper/Media/videos.json";
export default class ActualiteVideosContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: "",
    };
  }
  componentDidMount() {
    this.setState({
      device: Utils.DetectDevice(),
    });
  }
  renderMovies = () =>
    movies.map((movie, key) => {
      if (Utils.DetectDevice() === "MOBILE") {
        return (
          <Col>
            <VideosCard
              device={this.state.device}
              name={movie.name}
              lien={movie.lien}
              description={movie.description}
              annee={movie.annee}
              event={movie.event}
            />
          </Col>
        );
      } else {
        return (
          <VideosCard
            device={this.state.device}
            name={movie.name}
            lien={movie.lien}
            description={movie.description}
            annee={movie.annee}
            event={movie.event}
          />
        );
      }
  });
  render() {
    return (
      <Layout
        style={{
          margin: "10px 16px",
        }}
      >
        <Row>{this.renderMovies()}</Row>
      </Layout>
    );
  }
}
