import React, { Component } from 'react'
import { Layout, Row, Col, Icon, Spin } from 'antd';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import './evenement.scss'
import Utils from '../../Utils/detectDevice'
import ItemCalendrierEvenement from './ItemCalendrierEvenement'
import ItemEvenementDuJour from './ItemEvenementDuJour'
//import api from '../../api/index'
import { MDBBtn } from "mdbreact";
import HelperEvenement from '../../Helper/Evenement/helperEvenement'
const antIcon = <Icon type="loading" style={{ fontSize: 56 }} spin />;
export default class BarreEvenements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: '',
            mois: '',
            evenementMensuel: [],
            moisLettre: '',
            today: []
        }
    }
    componentDidMount() {
        try {
            
            this.setState({
                device: Utils.DetectDevice()
            })
            this.getEvenementsForMonth(this.defineMonth())
        } catch (error) {

        }
    }
    defineMonth() {
        let date = new Date()
        let mois = date.getMonth() + 1
        mois = mois.toString()
        if (mois.length < 2) {
            mois = '0' + mois
        }
        const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ];
        this.setState({
            moisLettre: monthNames[date.getMonth()]
        })
        return mois
    }
    async getEvenementsForMonth(mm) {
        try {
            /*
            let payload = {
                mm: mm
            }
            await api.GetEvenementsForMonth(payload).then((response) => {
                if (response.data.success) {

                    this.setState({
                        evenementMensuel: this.trierEvenement(response.data.data),
                        today: this.getEvenementDuJour(response.data.data)
                    })
                }
            }).catch(err => {
                console.log(err)
            })
           */
          this.setState({
            evenementMensuel: this.trierEvenement(HelperEvenement.getEvenementsMonth(mm))
        })
        } catch (err) {
            console.log(err)
        }
    }
    renderCalendrierEvenement() {
        return this.state.evenementMensuel.map((evenement, index) => {
            return (
                <ItemCalendrierEvenement key={index}
                    device={this.state.device}
                    evenement={evenement}
                />
            )
        })
    }
    trierEvenement(evenements) {
        return evenements.sort((a, b) => (a.date.jour > b.date.jour) ? 1 : ((b.date.jour > a.date.jour) ? -1 : 0));
    }
    getEvenementDuJour(evenements) {
        let date = new Date()
        let jour = date.getDate()
        let today = []
        evenements.forEach(evenement => {
            if (evenement.date.jour === jour.toString()) {
                today.push(evenement)
            }
        });
        return today;
    }
    renderToday() {
        return this.state.today.map((evenement, index) => {
            return (
                <ItemEvenementDuJour
                    key={index}
                    device={this.state.device}
                    evenement={evenement}
                />
            )
        })
    }
    render() {
        return (
            <>
                <Layout>
                    {
                        this.state.device === "MOBILE" ?
                            (
                                <div className="contentPrésentationMobileF">
                                    <div>
                                        <h2 className="separator" style={{fontWeight: 'bold'}}>CALENDRIER DU MOIS</h2>
                                        <hr className="separator" />
                                    </div>
                                    <Row>
                                        {
                                            this.state.evenementMensuel.length !== 0 ?
                                                (
                                                    <>
                                                        <Col >
                                                            <div>
                                                                <h5 style={{ color: '#021930', fontWeight: 'bold' }}>En {this.state.moisLettre}</h5>

                                                                <div className="">
                                                                    <div className="barredivContent">
                                                                        <Row type="flex" justify="space-around" align="bottom">
                                                                            {this.renderCalendrierEvenement()}
                                                                        </Row>
                                                                        <Link to="/calendrier">
                                                                            <MDBBtn color="black" size="lg">Voir le calendrier complet de la saison</MDBBtn>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </>
                                                ) :
                                                (
                                                    <div style={{ marginTop: '50px' }}>
                                                        <Spin indicator={antIcon} />
                                                        <p>Chargement ...</p>
                                                    </div>
                                                )
                                        }
                                    </Row>
                                            
                                </div>
                            ) :
                            (
                                <div className="contentEvenementFsjda">
                                    <div>
                                        <h2 className="separator" style={{fontWeight: 'bold'}}>CALENDRIER DU MOIS</h2>
                                        <hr className="separator" />
                                    </div>
                                    <Row>
                                        {
                                            this.state.evenementMensuel.length !== 0 ?
                                                (
                                                    <>
                                                        <Col >
                                                            <div>
                                                                <h5 style={{ color: '#021930', fontWeight: 'bold' }}>En {this.state.moisLettre}</h5>

                                                                <div className="">
                                                                    <div className="barredivContent">
                                                                        <Row type="flex" justify="space-around" align="bottom">
                                                                            {this.renderCalendrierEvenement()}
                                                                        </Row>
                                                                        <Link to="/calendrier">
                                                                            <MDBBtn color="black" size="lg">Voir le calendrier complet de la saison</MDBBtn>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </>
                                                ) :
                                                (
                                                    <div style={{ marginTop: '50px' }}>
                                                        <Spin indicator={antIcon} />
                                                        <p>Chargement ...</p>
                                                    </div>
                                                )
                                        }
                                    </Row>

                                </div>
                            )
                    }
                </Layout>

            </>
        )
    }
}
