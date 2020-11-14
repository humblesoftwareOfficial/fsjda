import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { Layout } from 'antd'
import image_un from '../../assets/fsjda/1.jpg'
import image_deux from '../../assets/fsjda/2.jpg'
import image_trois from '../../assets/fsjda/3.jpg'
import image_quatre from '../../assets/fsjda/4.jpg'
import image_cinq from '../../assets/fsjda/5.jpg'
import image_sept from '../../assets/fsjda/7.png'
import 'bootstrap/dist/css/bootstrap.min.css';
const { Content } = Layout;

export default class ContentImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: null,
            index: 0,
            device: '',
            size: '',
            Images: [
                {
                    index: 6,
                    image: image_sept,
                    titre: "FITNESS EN LIGNE!",
                    description: "Affrontez-vous et vos amis dans notre nouveau défi de fitness en ligne!",
                    link: "https://fit.ijf.org/"
                },
                {
                    index: 1,
                    image: image_un,
                    titre: 'Mbagnick NDIAYE',
                    description: "Meilleur sportif Sénégalais de l'année 2019.",
                    link: ""
                },
                {
                    index: 2,
                    image: image_deux,
                    titre: 'Championnat Sénégal',
                    description: 'Championnat du Sénégal 2020 à THIES',
                    link: ""
                },
                {
                    index: 3,
                    image: image_trois,
                    titre: 'Jeux Africains',
                    description: 'Jeux Africains de Rabat 2019- Judo: Mbagnick Ndiaye remporte la médaille d’or',
                    link: ""
                },
                {
                    index: 4,
                    image: image_quatre,
                    titre: "Championnat d'Afrique",
                    description: "Championnats d'Afrique Cadets & Junior 2019",
                    link: ""
                },
                {
                    index: 5,
                    image: image_cinq,
                    titre: "Sportif de l'année 2019",
                    description: "Mbagnick NDIAYE",
                    link: ""
                },
                
            ]
        }
        this.handleSelect = this.handleSelect.bind(this)
        //this.onImageChange = this.onImageChange.bind(this)
    }
    componentDidMount() {
        this.detectmob()
        this.props.onImageChange(this.state.Images[this.state.index].titre, this.state.Images[this.state.index].description)
    }
    detectmob() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            this.setState({
                device: 'MOBILE',
                size: 300
            })
        } else {
            this.setState({
                device: 'LAPTOP',
                size: 400
            })
        }
    }
    handleSelect(selectIndex, e) {
        this.setState({
            index: selectIndex,
            direction: e.direction
        })
        this.props.onImageChange(this.state.Images[selectIndex].titre, this.state.Images[selectIndex].description)
    }
    renderImagesItem() {
        return this.state.Images.map((imageItem, key) => {
            return (
                <Carousel.Item key={key} index={imageItem.index}>
                    <div className="containerImage">
                        
                        {
                            imageItem.link.length > 0 ?
                            (
                                <a href={imageItem.link} target="blank" style={{color: "#FFF"}}>
                                    <img
                                        className="d-block w-100"
                                        src={imageItem.image}
                                        alt={imageItem.titre}
                                        style={{ height: this.state.size }}
                                    />
                                    
                                </a>
                            ):
                            (
                                <img
                                        className="d-block w-100"
                                        src={imageItem.image}
                                        alt={imageItem.titre}
                                        style={{ height: this.state.size }}
                                    />
                            )
                        }
                    </div>
                </Carousel.Item>
            )
        })
    }
    render() {
        return (
            <Content style={{ marginTop: 0,   }}>
                <div >
                    <Carousel
                        interval={10000}
                        activeIndex={this.state.index}
                        direction={this.state.direction}
                        onSelect={this.handleSelect}>
                        {this.renderImagesItem()}
                    </Carousel>
                </div>
            </Content>
        )
    }
}
