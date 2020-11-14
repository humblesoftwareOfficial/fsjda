import React, { Component } from 'react'
import { Layout, Row, Col, Spin, Icon, Affix } from 'antd'
//import api from '../../api/index'
import Header from '../Utils/Header'
import Footer from '../Utils/Footer'
import Partenaires from '../Partenaires/Partenaires'
import Utils from '../../Utils/detectDevice'
import ContentLigues from './ContentLigues'
import DisplayLigue from './DisplayLigue'
import HeaderFromPage from '../Utils/HeaderFromPage'
import SocialNetwork from '../Home/SocialNetworks'
import HelperLigues from '../../Helper/ClubsLigues/helperLigueClub'
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
export default class Ligues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: '',
            chargement: true,
            ligue: {},
            clubs: [],
            ligues: [],
            top: 50,
        }
        this.onLigueSelect = this.onLigueSelect.bind(this)

    }
    componentDidMount() {
        try {
            window.scrollTo(0, 0)
            this.setState({
                device: Utils.DetectDevice()
            })
            this.getLigues()
        } catch (err) {

        }
    }
    async getLigues() {
        try {
            /*
            await api.GetLigues().then((response) => {
                if (response.data.success) {
                    this.setState({
                        ligues: response.data.data,
                    })
                    if(Utils.DetectDevice() === 'MOBILE') {
                        this.onLigueSelect(response.data.data[0].code, response.data.data[0].libelle)
                    }
                }
            })
            */
            const lg = HelperLigues.getLigues()
            this.setState({
                ligues: lg
            })

        } catch (err) {
            this.setState({
                ligues: []
            })
        }
    }
    onLigueSelect(code, libelle, _id) {
        let ligue = {
            code: code,
            libelle: libelle,
            _id: _id
        }
        this.setState({
            ligue: ligue,
            chargement: true,
        })
        window.scroll(0, 0)
        this.getClubsLigue(ligue.code, _id)
    }
    async getClubsLigue(code, _id) {
        try {
            /*
            let payload = {
                code: code
            }
            await api.GetClubsByLigue(payload).then((response) => {
                if (response.data.success) {
                    this.setState({
                        clubs: response.data.data,
                        chargement: false
                    })
                } else {
                    this.setState({
                        clubs: [],
                        chargement: false
                    })
                }
            })
            */
            let clubs = HelperLigues.getClubsByLigue(_id)
            if (JSON.stringify(this.state.clubs) !== JSON.stringify(clubs)) {
                this.setState({
                    clubs: clubs,
                }, () => this.setState({
                    chargement: false
                }))
            }

        } catch (err) {
            this.setState({
                clubs: []
            })
        }
    }
    render() {
        return (
            <Layout className="background">
                <Header active="ligues" />
                {
                    this.state.device === 'MOBILE' ?
                        (
                            <>
                                <Affix offsetTop={this.state.top}>
                                    <div className="enteteContent">
                                        <small className="entete">LIGUES & CLUBS</small>
                                    </div>
                                </Affix>
                                <HeaderFromPage title="Ligues" menu={this.state.ligues} OnSubMenuClicked={this.onLigueSelect} />
                                {
                                    this.state.chargement ?
                                        (
                                            <div style={{ marginTop: '50px' }}>
                                                <Spin indicator={antIcon} />
                                                <p>Chargement en cours ...</p>
                                            </div>
                                        ) :
                                        (
                                            <DisplayLigue ligue={this.state.ligue} clubs={this.state.clubs} device={true} />
                                        )
                                }

                            </>
                        ) :
                        (
                            <Row>
                                <Col span={8}>
                                    <ContentLigues onLigueSelect={this.onLigueSelect} />
                                </Col>
                                <Col span={16}>
                                    {
                                        this.state.chargement ?
                                            (
                                                <div style={{ marginTop: '50px' }}>
                                                    <Spin indicator={antIcon} />
                                                    <p>Chargement en cours ...</p>
                                                </div>
                                            ) :
                                            (
                                                <DisplayLigue ligue={this.state.ligue} clubs={this.state.clubs} />
                                            )
                                    }
                                </Col>
                            </Row>
                        )
                }
                <SocialNetwork />
                <Partenaires />
                <Footer />
            </Layout>
        )
    }
}