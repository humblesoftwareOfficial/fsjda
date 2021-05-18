import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Layout } from "antd";
import images from "../Update/Constants/images.json";
import "bootstrap/dist/css/bootstrap.min.css";
const { Content } = Layout;

export default class ContentImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: null,
      index: 0,
      device: "",
      size: "",
      Images: images,
    };
    this.handleSelect = this.handleSelect.bind(this);
    //this.onImageChange = this.onImageChange.bind(this)
  }
  componentDidMount() {
    this.detectmob();
    this.props.onImageChange(
      this.state.Images[this.state.index].titre,
      this.state.Images[this.state.index].description
    );
  }
  detectmob() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      this.setState({
        device: "MOBILE",
        size: 400,
      });
    } else {
      this.setState({
        device: "LAPTOP",
        size: 500,
      });
    }
  }
  handleSelect(selectIndex, e) {
    this.setState({
      index: selectIndex,
      direction: e.direction,
    });
    this.props.onImageChange(
      this.state.Images[selectIndex].titre,
      this.state.Images[selectIndex].description
    );
  }
  renderImagesItem() {
    return this.state.Images.map((imageItem, key) => {
      return (
        <Carousel.Item key={key} index={imageItem.index}>
          <div className="containerImage">
              <img
                className="d-block w-100"
                style={{ borderRadius: "5px" }}
                src={imageItem.image}
                alt={imageItem.titre}
              />
          </div>
        </Carousel.Item>
      );
    });
  }
  render() {
    return (
      <Content style={{ marginTop: 0 }}>
        <div>
          <Carousel
            interval={5000}
            activeIndex={this.state.index}
            direction={this.state.direction}
            onSelect={this.handleSelect}
          >
            {this.renderImagesItem()}
          </Carousel>
        </div>
      </Content>
    );
  }
}
