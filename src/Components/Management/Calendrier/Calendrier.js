import React, { Component } from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Partenaires from '../../Partenaires/Partenaires'
import { Layout, Row, Col, Collapse, Affix } from 'antd'
import EvenementsMois from './EvenementsMois'
import Utils from '../../../Utils/detectDevice'
import CardLeftCalendrier from './CardLeftCalendrier'
import SocialNetwork from '../../Home/SocialNetworks'
const { Panel } = Collapse;
export default class Calendrier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mois: [
                "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
            ],
            activeMonth: "",
            device: "",
            top: 50,
        }
    }
    componentDidMount() {
        this.setState({
            activeMonth: "'" + this.defineMonthActive() + "'",
            device: Utils.DetectDevice()
        })
        window.scrollTo(0,0)
    }
    defineMonthActive() {
        try {
            let date = new Date()
            let mois = date.getMonth() + 1
            mois = mois.toString()
            if (mois.length < 2) {
                mois = '0' + mois
            }
            const monthNames = ["Janvier", "Fébrier", "Mars", "Avril", "Mai", "Juin",
                "Julliet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"
            ];
            this.setState({
                moisLettre: monthNames[date.getMonth()]
            })
            return parseInt(mois)
        } catch (err) {
            console.log(err)
            return ""
        }
    }
    renderCalendrier() {
        return this.state.mois.map((mm, index) => {
            return (
                <Panel header={this.defineMonth(mm)} key={index.toString()}>
                    <EvenementsMois key={index} mois={mm} />
                </Panel>
            )
        })
    }
    defineMonth(mois) {
        try {
            switch (mois) {
                case "01":
                    return "Janvier";
                case "02":
                    return "Février";
                case "03":
                    return "Mars";
                case "04":
                    return "Avril";
                case "05":
                    return "Mai";
                case "06":
                    return "Juin";
                case "07":
                    return "Juillet";
                case "08":
                    return "Août";
                case "09":
                    return "Septembre";
                case "10":
                    return "Octobre";
                case "11":
                    return "Novembre"
                case "12":
                    return "Décembre";
                default:
                    return "";
            }
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <Layout className="background">
                <Header fixed={false} active="calendrier" />
                {
                    this.state.device === "MOBILE" ?
                        (
                            <Row>
                            <Affix offsetTop={this.state.top}>
                                        <div className="enteteContent">
                                            <small className="entete">CALENDRIER</small>
                                        </div>
                                    </Affix>
                                <Col>
                                    <div className="contentLigueMobile">
                                        <p className='titre'>
                                            CALENDRIER DES ACTIVITES DE LA FEDERATION SENEGALAISE DE JUDO SAISON 2021
                                        </p>
                                        <hr className="separator" />
                                        <Collapse defaultActiveKey={['0']} >
                                            {this.renderCalendrier()}
                                        </Collapse>
                                    </div>
                                </Col>
                                <Col>
                                    <CardLeftCalendrier/>
                                </Col>
                            </Row>
                        ) :
                        (
                            <Row>
                                <Col span={16}>
                                    <div className="contentGloires">
                                        <p className='titre'>
                                            CALENDRIER DES ACTIVITES DE LA FEDERATION SENEGALAISE DE JUDO SAISON 2020
                                        </p>
                                        <hr className="separator" />
                                        <Collapse defaultActiveKey={['0']} >
                                            {this.renderCalendrier()}
                                        </Collapse>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <Affix>
                                    <CardLeftCalendrier/>
                                    </Affix>
                                </Col>
                            </Row>
                        )
                }
                <SocialNetwork/>
                <Partenaires />
                <Footer />
            </Layout>
        )
    }
}