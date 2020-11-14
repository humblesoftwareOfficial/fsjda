import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Row, Col, Spin, Icon } from 'antd'
import ImageMedaille from './ImageMedaille'
//import api from '../../../api/index'
import Utils from '../../../Utils/detectDevice'
import HelperCompetitions from '../../../Helper/Palmares/HelperCompetitions'
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
export default class PalmaresCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medaille: null,
            image: null,
            device: ''
        }
    }
    componentDidMount() {
        try {
            this.getMedailleByCode()
            this.setState({
                device: Utils.DetectDevice()
            })
        } catch (err) {
            console.log(err)
        }
    }
    async getMedailleByCode() {
        /*
        let payload = {
            code: this.props.medaille.code
        }
        await api.GetMedailleByCode(payload).then((response) => {
            if (response.data.success) {
                this.setState({
                    medaille: response.data.data,
                })
            }
        }).catch(err => {
            console.log(err)
        })
        */
        try {
            this.setState({
                medaille: HelperCompetitions.getMedailleById(this.props.medaille._id)
            })
        } catch (err) {
            //console.log(this.props.medaille)
        }
    }
    render() {
        return (
            <>
                {
                    this.state.device === 'MOBILE' ?
                        (
                                <Card style={{ marginBottom: 5, backgroundColor: 'rgb(22, 42, 58)'}}>
                                    <Card.Body>
                                        {
                                            this.state.medaille ?
                                                (
                                                    <>
                                                        <Row>
                                                            <Col>
                                                                <p className="titrePalmares">
                                                                    {this.state.medaille.athlete.nom.toUpperCase() + " " + this.state.medaille.athlete.prenom}
                                                                </p>
                                                            </Col>
                                                            <Col >
                                                                {
                                                                    this.state.medaille.typeMedaille.libelle === 'Or' ?
                                                                        (
                                                                            <ImageMedaille image="or" />
                                                                        ) :
                                                                        (
                                                                            <>
                                                                                {
                                                                                    this.state.medaille.typeMedaille.libelle === 'Argent' ?
                                                                                        (
                                                                                            <ImageMedaille image="argent" />
                                                                                        ) :
                                                                                        (
                                                                                            <ImageMedaille image="bronze" />
                                                                                        )
                                                                                }
                                                                            </>
                                                                        )
                                                                }
                                                            </Col>
                                                        </Row>
                                                        <p style={{ color: '#FFF' }}>
                                                            {' '}
                                                            {"Médaille " + this.state.medaille.typeMedaille.libelle}
                                                            {' '}
                                                        </p>
                                                        <p style={{ color: '#FFF' }}>
                                                            {' '}
                                                            {this.state.medaille.description}
                                                            {' '}
                                                        </p>
                                                        <footer className="blockquote-footer">
                                                            <p className="datePalmares">
                                                                {"Du " + this.state.medaille.competition.dateDebut + " au " + this.state.medaille.competition.dateFin}
                                                                <small> {this.state.medaille.competition.lieu} </small>
                                                            </p>
                                                        </footer>
                                                    </>
                                                ) :
                                                (
                                                    <Spin indicator={antIcon} />
                                                )
                                        }
                                    </Card.Body>
                                </Card>
                        ) :
                        (
                            <Col>
                                <Card style={{ marginBottom: 5, backgroundColor: 'rgb(22, 42, 58)', height: '13rem' }}>
                                    <Card.Body>
                                        {
                                            this.state.medaille ?
                                                (
                                                    <>
                                                        <Row>
                                                            <Col span={16}>
                                                                <p className="titrePalmares">
                                                                    {this.state.medaille.athlete.nom.toUpperCase() + " " + this.state.medaille.athlete.prenom}
                                                                </p>
                                                            </Col>
                                                            <Col span={8}>
                                                                {
                                                                    this.state.medaille.typeMedaille.libelle === 'Or' ?
                                                                        (
                                                                            <ImageMedaille image="or" />
                                                                        ) :
                                                                        (
                                                                            <>
                                                                                {
                                                                                    this.state.medaille.typeMedaille.libelle === 'Argent' ?
                                                                                        (
                                                                                            <ImageMedaille image="argent" />
                                                                                        ) :
                                                                                        (
                                                                                            <ImageMedaille image="bronze" />
                                                                                        )
                                                                                }
                                                                            </>
                                                                        )
                                                                }
                                                            </Col>
                                                        </Row>
                                                        <p style={{ color: '#FFF' }}>
                                                            {' '}
                                                            {"Médaille " + this.state.medaille.typeMedaille.libelle}
                                                            {' '}
                                                        </p>
                                                        <p style={{ color: '#FFF' }}>
                                                            {' '}
                                                            {this.state.medaille.description}
                                                            {' '}
                                                        </p>
                                                        <footer className="blockquote-footer">
                                                            <p className="datePalmares">
                                                                {"Du " + this.state.medaille.competition.dateDebut + " au " + this.state.medaille.competition.dateFin}
                                                                <small> {this.state.medaille.competition.lieu} </small>
                                                            </p>
                                                        </footer>
                                                    </>
                                                ) :
                                                (
                                                    <Spin indicator={antIcon} />
                                                )
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                }
            </>
        )
    }
}
