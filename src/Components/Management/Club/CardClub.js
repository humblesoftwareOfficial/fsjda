import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import judo from '../../../assets/fsjda/judo.png'
import './design.scss'
import api from '../../../api/index'
import HelperClub from '../../../Helper/ClubsLigues/helperLigueClub'
import './transition.css'

export default class CardClub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localisation: {},
            backCard: false,
            club: null,
            device: ''
        }
        this.cardClick = this.cardClick.bind(this)
    }
    componentDidMount() {
        try {
            //this.getClubByCode()
            //this.getLocalisation()
            this.setState({
                localisation: HelperClub.findLocalisation(this.props.club._id)
            })
        } catch (err) {
            //console.log(err)
        }
    }
    cardClick() {
        this.setState({
            cardClick: !this.state.cardClick
        })
    }
    async getLocalisation() {
        try {
            let payload = {
                code: this.props.club.localisation.code
            }
            await api.GetLocalisation(payload).then((response) => {
                this.setState({
                    localisation: response.data.data
                })
            }).catch(err => {
                console.log(err)
                this.setState({
                    localisation: null
                })
            })
        } catch (err) {
            //console.log(this.props.club)
            //console.log(err)
            this.setState({
                localisation: null
            })
        }
    }
    async getClubByCode(){
        try {
            let payload = {
                code: this.props.club.code
            }
            await api.GetClubByCode(payload).then((response) => {
                this.setState({
                    club: response.data.data
                })
            }).catch(err =>{

            })
        } catch (err) {
            console.log(err)
            
        }
    }
    render() {
        return (
            <>
                {
                    this.state.cardClick ?
                        (
                            <div onClick={this.cardClick} id="rotateCard" className="hand">
                                <Card style={{ marginBottom: 5, height: '13rem',}}>
                                    <Card.Body>
                                        <Row>
                                            <Col >
                                                <p className="profileClubName">Responsable</p>
                                            </Col>
                                        </Row>
                                        <small style={{ color: '#000' }}>
                                            {' '}
                                                Nom: <b> {this.props.club.responsable ? this.props.club.responsable.nom : ''}</b>
                                            {' '}
                                        </small>
                                        <br/>
                                        <small style={{ color: '#000' }}>
                                            {' '}
                                                Prénom: <b> {this.props.club.responsable ? this.props.club.responsable.prenom : ''}</b>
                                            {' '}
                                        </small>
                                        <br/>
                                        <small style={{ color: '#000' }}>
                                            {' '}
                                                Téléphone: <b> {this.props.club.responsable ? this.props.club.responsable.telephone : ''}</b>
                                            {' '}
                                        </small>
                                        <footer className="blockquote-footer">
                                            <p>
                                               <cite>
                                                    Si les informations du responsable ne sont pas disponibles,
                                                    référez-vous à la section contacts du site.
                                                </cite>
                                            </p>
                                        </footer>
                                    </Card.Body>
                                </Card>
                            </div>
                        ) :
                        (
                            <div onClick={this.cardClick} className="hand">
                                <Card style={{ marginBottom: 5, height: '13rem' }}>
                                    <Card.Body>
                                        <Row>
                                            <Col >
                                                <i className="profileClub">
                                                    <img src={judo} className='imgProfileClub' alt="image1" />
                                                </i>
                                                <p className="profileClubName">{this.props.club.libelle}</p>
                                            </Col>
                                        </Row>
                                        <small style={{ color: '#000' }}>
                                            {' '}
                                            Adresse: <b> {this.props.club.adresse}</b>
                                            {' '}
                                        </small>
                                        <footer className="blockquote-footer">
                                            <p>
                                                {
                                                    this.state.localisation ?
                                                        (
                                                            <>
                                                                {
                                                                    <cite>{this.state.localisation.region ? this.state.localisation.region : ""} ,</cite>
                                                                }
                                                                {
                                                                    this.state.localisation.departement ?
                                                                        (
                                                                            <cite>
                                                                                {
                                                                                    " " + this.state.localisation.departement ? this.state.localisation.departement : ""
                                                                                } ,
                                                                            </cite>
                                                                        ) :
                                                                        (
                                                                            <></>
                                                                        )
                                                                }
                                                                {
                                                                    this.state.localisation.commune ?
                                                                        (
                                                                            this.state.localisation.commune ? this.state.localisation.commune : ""
                                                                        ) :
                                                                        (
                                                                            <></>
                                                                        )
                                                                }
                                                            </>
                                                        ) :
                                                        (
                                                            <></>
                                                        )
                                                }
                                            </p>
                                        </footer>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                }
            </>
        )
    }
}
