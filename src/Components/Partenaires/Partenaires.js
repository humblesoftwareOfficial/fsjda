import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import Utils from '../../Utils/detectDevice'
import './design.scss'
import port from '../../assets/partenaires/port.jpg'
import startenergy from '../../assets/partenaires/startenergy.png'
import eureka from '../../assets/partenaires/eureka.jpg'
import villedakar from '../../assets/partenaires/villedakar.jpg'
import victorinox from '../../assets/partenaires/victorinox.jpg'
export default class Partenaires extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: ''
        }
    }
    componentDidMount() {
        this.setState({
            device: Utils.DetectDevice()
        })
        //alert(window.innerHeight + ',' + window.innerWidth)
    }
    render() {
        return (
            <Layout style={{ backgroundColor: '#FFF0' }} id="partenaires">
                {
                    this.state.device === 'MOBILE' ?
                        (
                            <div className="contentPartenaires">
                                <div className="contentPartenaires">
                                    <h3>NOS PARTENAIRES</h3>
                                
                                <Row>
                                   
                                    <Col>
                                        <div className="">
                                            <img className="imgPartenairesMobile" src={port} alt="partenaires"/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="">
                                            <img className="imgPartenairesMobile" src={villedakar} alt="partenaires"/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="">
                                            <img className="imgPartenairesMobile" src={victorinox} alt="partenaires"/>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className="">
                                            <img className="imgPartenairesMobile" src={startenergy} alt="partenaires"/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="">
                                            <img className="imgPartenairesMobile" src={eureka} alt="partenaires"/>
                                        </div>
                                    </Col>
                                </Row>
                                </div>
                            </div>
                        ) :
                        (
                            <div className="contentPartenaires">
                                <div className="contentPartenaires">
                                    <h3>NOS PARTENAIRES</h3>
                                    <div className="row">
                                        <div className="col">
                                            <div className="dotPartenaires">
                                                <img className="imgPartenaires" src={port} alt="partenaires"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="dotPartenaires">
                                                <img className="imgPartenaires" src={villedakar} alt="partenaires"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="dotPartenaires">
                                                <img className="imgPartenaires" src={victorinox} alt="partenaires"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="dotPartenaires">
                                            <img className="imgPartenaires" src={startenergy} alt="partenaires"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="dotPartenaires">
                                            <img className="imgPartenaires" src={eureka} alt="partenaires"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </Layout>
        )
    }
}