import React, { Component } from 'react'
import { Layout, Row, Col, Affix } from 'antd'
import Header from '../../Utils/Header'
import Footer from '../../Utils/Footer'
import GloireCard from './GloireCard'
import './design.scss'
import SeydouToure from './SeydouToure'
import AmaraDabo from './AmaraDabo'
import OmarDanga from './OmarDanga'
import Device from '../../../Utils/detectDevice'
import Partenaires from '../../Partenaires/Partenaires'
import SocialNetwork from '../../Home/SocialNetworks'
export default class Gloires extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: '',
            menu: [
                {
                    name: "Maitre Seydou Nourou TOURE",
                    key: 1
                },
                {
                    name: "Maitre Amara DABO",
                    key: 2
                },
                {
                    name: "Maitre Omar Danga LOUM",
                    key: 3
                }
            ],
            subMenu: 1,
            top: 50,
        }
        this.OnSubMenuClicked = this.OnSubMenuClicked.bind(this)
    }
    componentDidMount() {
        this.setState({
            device: Device.DetectDevice()
        })
        window.scrollTo(0,0)
    }
    OnSubMenuClicked(key) {
        this.setState({
            subMenu: key
        })
        window.scrollTo(0, 0)
    }
    renderGloire() {
        switch (this.state.subMenu) {
            case 1:
                return <SeydouToure/>
            case 2:
                return <AmaraDabo/>
            case 3:
                return <OmarDanga/>
            default:
                break;
        }
    }
    render() {
        return (
            <Layout className="background">
                
                <div>
                    <Row>
                        {
                            this.state.device === 'MOBILE' ?
                                (
                                    <>
                                    <Header fixed={true}/>
                                    <Affix offsetTop={this.state.top}>
                                        <div className="enteteContent">
                                            <small className="entete">GLOIRES</small>
                                        </div>
                                    </Affix>
                                        <Col>
                                            <SeydouToure device={this.state.device}/>
                                            <AmaraDabo device={this.state.device}/>
                                            <OmarDanga device={this.state.device}/>
                                        </Col>
                                    </>
                                ) :
                                (
                                    <>
                                    <Header active="gloires"/>
                                        <Col span={8}>
                                            <Affix>
                                                <div className="contentSectionGloires">
                                                    <p className='titre'>
                                                        NOS GLOIRES
                                                    </p>
                                                    <div className="deroulantGloires">
                                                        <Row>
                                                            <GloireCard nom="TOURE" prenom="Maitre Seydou Nourou" id={1} OnSubMenuClicked={this.OnSubMenuClicked}/>
                                                            <GloireCard nom="DABO" prenom="Maitre Amara" id={2} OnSubMenuClicked={this.OnSubMenuClicked}/>
                                                            <GloireCard nom="LOUM" prenom="Maitre Omar Danga" id={3} OnSubMenuClicked={this.OnSubMenuClicked}/>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Affix>
                                        </Col>
                                        <Col span={16}>
                                            {
                                                this.renderGloire()
                                            }
                                        </Col>
                                    </>
                                )
                        }
                    </Row>
                </div>
                <SocialNetwork/>
                <Partenaires/>
                <Footer/>
            </Layout>
        )
    }
}
