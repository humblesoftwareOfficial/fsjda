import React, { Component } from "react";
import { Col, Tag } from "antd";
import { Card } from "react-bootstrap";
import "./actualites.css";

import YouTube from "react-youtube";
export default class ActualitesVideosCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "",
      opts: {
        height: "300",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        },
      },
    };
    this._onReady = this._onReady.bind(this);
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  componentDidMount() {}

  renderCardYoutube = () => (
    <>
      <YouTube
        videoId={this.props.lien}
        opts={this.state.opts}
        onReady={this._onReady}
        className="video"
      />
      <Card.Body
        style={{
          backgroundColor: "rgb(22, 42, 58)",
          borderEndStartRadius: "5px",
          borderEndEndRadius: "5px",
        }}
      >
        <Card.Title className="titreActualites">{this.props.event}</Card.Title>
        <p className="descriptionActualites">{this.props.description}</p>
        <Card.Text>
          <Tag color="#000">{this.props.annee}</Tag>
        </Card.Text>
      </Card.Body>
    </>
  );
  render() {
    return (
      <>
        {this.props.device === "MOBILE" ? (
          <Card style={{ marginBottom: 15, borderRadius: "5px" }}>
            {this.renderCardYoutube()}
          </Card>
        ) : (
          <Col span={8} className="pointer">
            <Card
              style={{ marginBottom: 15, height: "28rem", borderRadius: "5px" }}
            >
              {this.renderCardYoutube()}
            </Card>
          </Col>
        )}
      </>
    );
  }
}
