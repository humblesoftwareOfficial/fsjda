import React, { Component } from 'react'
import { Layout, Col, Row } from 'antd'
import {Link} from 'react-router-dom'
import ContentImage from './ContentImage'
import image_un from '../../assets/fsjda/1.jpg'
import image_deux from '../../assets/fsjda/2.jpg'
import image_trois from '../../assets/fsjda/3.jpg'
import image_quatre from '../../assets/fsjda/4.jpg'
import 'antd/dist/antd.css';
import ico_un from '../../assets/icones/1.png'
import ico_deux from '../../assets/icones/2.png'
import tokyo from '../../assets/icones/tokyo.png'
import ico_quatre from '../../assets/icones/4.png'
import ico_cinq from '../../assets/icones/5.png'
import ico_six from '../../assets/icones/6.png'
import ico_sept from '../../assets/icones/7.png'
import ico_huit from '../../assets/icones/8.png'
import ico_neuf from '../../assets/icones/9.png'
export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: '',
            titre: '',
            description: '',
            Images: [
                {
                    index: 1,
                    image: image_un,
                    titre: 'First slide label',
                    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
                },
                {
                    index: 2,
                    image: image_deux,
                    titre: 'Second slide label',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    index: 1,
                    image: image_trois,
                    titre: 'Third slide label',
                    description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
                },
                {
                    index: 1,
                    image: image_quatre,
                    titre: 'Hortense Diedhiou',
                    description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
                },
            ]
        }
        this.onImageChange = this.onImageChange.bind(this)
    }
    componentDidMount() {
        this.detectmob()
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
                device: 'MOBILE'
            })
        } else {
            this.setState({
                device: 'LAPTOP'
            })
        }
    }
    onImageChange(titre, description) {
        this.setState({
            titre: titre,
            description: description
        })
    }
    render() {
        return (
            <div>

                {
                    this.state.device === 'LAPTOP' ?
                        (
                            <Layout style={{
                                
                                minHeight: 500
                            }}>
                                <Row className="wrapperProfilePublications">

                                    <Col span={14}>
                                        <div >
                                            <ContentImage onImageChange={this.onImageChange} Images={this.state.Images}></ContentImage>
                                        </div>
                                        
                                        <h4 style={{ color: 'rgb(247, 238, 187)' }} className="titreImage">{this.state.titre}</h4>
                                                    <p style={{ color: 'rgb(247, 238, 187)' }}>
                                                        {this.state.description}
                                                    </p>
                                    </Col>
                                    <Col span={10}>
                                        <div className="wrapperProfileWidgets">
                                                    <div className="row" >
                                                        <div className="col">
                                                            <Link to="/federation">
                                                                <span className="cercleAccueilWeb">
                                                                    <img src={ico_neuf} alt="un" className="ico" />
                                                                </span>
                                                                <p style={{ color: '#FFF', marginLeft: '2px' }}>FÉDÉRATION</p>
                                                            </Link>
                                                        </div>
                                                        <div className="col">
                                                            <Link to="/inscription">
                                                                <span className="cercleAccueilWeb">
                                                                    <img src={ico_deux} alt="un" className="ico" />
                                                                </span>
                                                                <p style={{ color: '#FFF', marginLeft: '2px' }}>INSCRIPTION</p>
                                                            </Link>
                                                        </div>
                                                        <div className="col">
                                                            <Link to="/clubs">
                                                                <span className="cercleAccueilWeb">
                                                                    <img src={ico_un} alt="un" className="ico" />
                                                                </span>
                                                                <p style={{ color: '#FFF' }}>CLUBS</p>
                                                            </Link>
                                                        </div>
                                                        <div className="col">
                                                            <Link to="/palmares">
                                                                <span className="cercleAccueilWeb">
                                                                    <img src={ico_six} alt="deux" className="ico" />
                                                                </span>
                                                                <p style={{ color: '#FFF' }}>PALMARÈS</p>
                                                            </Link>
                                                        </div>
                                                        <div className="col">
                                                        <Link to="/mediatheque">
                                                            <span className="cercleAccueilWeb">
                                                                <img src={ico_sept} alt="un" className="ico" />
                                                            </span>
                                                            <p style={{ color: '#FFF', marginRight: '2px' }}>MÉDIATHÈQUE</p>
                                                        </Link>
                                                        </div>
                                                        <div className="col">
                                                        <Link to="/calendrier">
                                                            <span className="cercleAccueilWeb">
                                                                <img src={ico_cinq} alt="un" className="ico" />
                                                            </span>
                                                            <p style={{ color: '#FFF', marginRight: '2px' }}>CALENDRIER</p>
                                                        </Link>
                                                        </div>
                                                        <div className="col">
                                                        <Link to="/judo">
                                                            <span className="cercleAccueilWeb">
                                                                <img src={ico_huit} alt="un" className="ico" />
                                                            </span>
                                                            <p style={{ color: '#FFF', marginRight: '2px' }}>Le Judo s'Engage</p>
                                                        </Link>
                                                        </div>
                                                        <div className="col">
                                                        <Link to="/gloires">
                                                            <span className="cercleAccueilWeb">
                                                                <img src={ico_quatre} alt="un" className="ico" />
                                                            </span>
                                                            <p style={{ color: '#FFF', marginRight: '2px' }}>GLOIRES</p>
                                                        </Link>
                                                        </div>
                                                        <div className="col">
                                                        <Link to="/tokyo">
                                                            <span className="cercleAccueilWeb">
                                                                <img src={tokyo} alt="un" className="ico" />
                                                            </span>
                                                            <p style={{ color: '#FFF', marginRight: '2px' }}>ROAD TO TOKYO</p>
                                                        </Link>
                                                        </div>
                                                    </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Layout>
                        ) :
                        (
                            <>
                                {
                                    this.state.device === 'MOBILE' ?
                                        (
                                            <Row>
                                                <Col>
                                                    <div className="wrapperProfilePublicationsMobile">
                                                        <ContentImage onImageChange={this.onImageChange}></ContentImage>

                                                        <h4 style={{ color: 'rgb(247, 238, 187)' }} className="titreImage">{this.state.titre}</h4>
                                                        <p style={{ color: 'rgb(247, 238, 187)' }}>
                                                            {this.state.description}
                                                        </p>
                                                        <div className="row" style={{marginTop: '50px', marginBottom: '20px'}}>
                                                        <div className="col">
                                                            <Link to="/federation">
                                                                <span className="cercleAccueil">
                                                                    <img src={ico_neuf} alt="un" className="ico" />
                                                                </span>
                                                                <small style={{ color: '#FFF', marginLeft: '2px' }}>FÉDÉRATION</small>
                                                            </Link>
                                                        </div>
                                                        <div className="col">
                                                            <Link to="/inscription">
                                                                <span className="cercleAccueil">
                                                                    <img src={ico_deux} alt="un" className="ico" />
                                                                </span>
                                                                <small style={{ color: '#FFF', marginLeft: '2px' }}>INSCRIPTION</small>
                                                            </Link>
                                                        </div>
                                                        <div className="col">
                                                            <Link to="/clubs">
                                                                <span className="cercleAccueil">
                                                                    <img src={ico_un} alt="un" className="ico" />
                                                                </span>
                                                                <small style={{ color: '#FFF' }}>CLUBS</small>
                                                            </Link>
                                                        </div>
                                                        <div className="col">
                                                            <Link to="/palmares">
                                                                <span className="cercleAccueil">
                                                                    <img src={ico_six} alt="deux" className="ico" />
                                                                </span>
                                                                <small style={{ color: '#FFF' }}>PALMARÈS</small>
                                                            </Link>
                                                        </div>
                                                        <div className="col">
                                                        <Link to="/mediatheque">
                                                            <span className="cercleAccueil">
                                                                <img src={ico_sept} alt="un" className="ico" />
                                                            </span>
                                                            <small style={{ color: '#FFF', marginRight: '2px' }}>MÉDIATHÈQUE</small>
                                                        </Link>
                                                        </div>
                                                        <div className="col">
                                                        <Link to="/calendrier">
                                                            <span className="cercleAccueil">
                                                                <img src={ico_cinq} alt="un" className="ico" />
                                                            </span>
                                                            <small style={{ color: '#FFF', marginRight: '2px' }}>CALENDRIER</small>
                                                        </Link>
                                                        </div>
                                                        <div className="col">
                                                        <Link to="/judo">
                                                            <span className="cercleAccueil">
                                                                <img src={ico_huit} alt="un" className="ico" />
                                                            </span>
                                                            <small style={{ color: '#FFF', marginRight: '2px' }}>Le Judo s'Engage</small>
                                                        </Link>
                                                        </div>
                                                        <div className="col">
                                                        <Link to="/gloires">
                                                            <span className="cercleAccueil">
                                                                <img src={ico_quatre} alt="un" className="ico" />
                                                            </span>
                                                            <small style={{ color: '#FFF', marginRight: '2px' }}>GLOIRES</small>
                                                        </Link>
                                                        </div>
                                                        <div className="col">
                                                        <Link to="/tokyo">
                                                            <span className="cercleAccueil">
                                                                <img src={tokyo} alt="un" className="ico" />
                                                            </span>
                                                            <small style={{ color: '#FFF', marginRight: '2px' }}>ROAD TO TOKYO</small>
                                                        </Link>
                                                        </div>
                                                        <div className="col"></div>
                                                        <div className="col"></div>
                                                        <div className="col"></div>
                                                        </div>
                                                    </div>
                                                </Col>

                                            </Row>
                                        ) :
                                        (
                                            null
                                        )
                                }
                            </>
                        )
                }

            </div>
        )
    }
}
