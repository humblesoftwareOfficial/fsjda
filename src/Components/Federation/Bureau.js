import React, { Component } from 'react'
import { Col } from 'antd'
import CardMembre from './CardBureau'
//import api from '../../api/index'
import Utils from '../../Utils/detectDevice'
import HelpBureau from '../../Helper/Bureau/helperBureau'
export default class Bureau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            membres: [
                {
                    "details": "Expert-comptable | Trésorier du Comité Olympique (CNOSS) | Coordonnateur adjoint des Jeux Olympiques de la Jeunesse – JOJ DAKAR 2022",
                    "_id": "5e984c48713af00e18a0b512",
                    "nom": "WADE",
                    "prenom": "Babacar Makhtar",
                    "fonction": "Président",
                    "code": "MB-1587039304003-CRIxv",
                    "img": "president.png"
                },
                {
                    "details": "Chef d’entreprise;Directeur en chef de l’Arbitrage Africain",
                    "_id": "5e984d17713af00e18a0b514",
                    "nom": "NGOM",
                    "prenom": "Ababacar",
                    "fonction": "Vice-président",
                    "code": "MB-1587039511033-hh3LZ",
                    "img": "vicepresident.png"
                },
                {
                    "details": "Major, CN 8ème DAN",
                    "_id": "5e984d7a713af00e18a0b515",
                    "nom": "TOURE",
                    "prenom": "Seydou Nourou",
                    "fonction": "Vice-président",
                    "code": "MB-1587039610924-W3Mjl",
                    "img": "vicepresidentdeux.png"
                },
                {
                    "details": "MBA, manager sportif",
                    "_id": "5e984daf713af00e18a0b516",
                    "nom": "GUEYE",
                    "prenom": "Nafissatou",
                    "fonction": "Vice-présidente",
                    "code": "MB-1587039663661-ubt4s",
                    "img": "vicepresidenttrois.png"
                },
                {
                    "details": "Cadre financier",
                    "_id": "5e984cb1713af00e18a0b513",
                    "nom": "DIAKHATE",
                    "prenom": "El Hadji Massata",
                    "fonction": "Secrétaire Général",
                    "code": "MB-1587039409288-KE8q4",
                    "img": "sgeneral.png"
                },
                {
                    "details": "Gestionnaire",
                    "_id": "5e984ded713af00e18a0b517",
                    "nom": "FALL",
                    "prenom": "Cheikh Tidiane",
                    "fonction": "Trésorier Général",
                    "code": "MB-1587039725870-NuWkf",
                    "img": "tresorier.png"
                },
                {
                    "details": "Enseignant Chercheur",
                    "_id": "5e984e1d713af00e18a0b518",
                    "nom": "NDIAYE",
                    "prenom": "Cheikh Sadibou",
                    "fonction": "Directeur Technique National",
                    "code": "MB-1587039773082-76AWw",
                    "img": "dtn.png"
                }
            ],
            device: ""
        }
    }
    componentDidMount() {
        //this.getMembres()
        this.setState({
            device: Utils.DetectDevice()
        })
    }
    async getMembres() {
        try {
            /*
            await api.GetMembres().then((response) =>{
                this.setState({
                    membres: response.data.data
                })
            }).catch(err =>{
                console.log("ERREUR/ " + err)
            })
            */
            this.setState({
                membres: HelpBureau.getBureaux()
            })
        } catch (err) {
            console.log("ERREUR/ " + err)
            this.setState({
                membres: []
            })
        }
    }
    renderMembres() {
        return this.state.membres.map((membre, index) => {
            return (
                <div className="col-6" key={index}>
                    <CardMembre
                        nom={membre.nom}
                        prenom={membre.prenom}
                        fonction={membre.fonction}
                        details={membre.details}
                        img={membre.img}
                    />
                </div>
            )
        })
    }
    renderMembresMobile() {
        return this.state.membres.map((membre, index) => {
            return (
                <div className="col-12" key={index}>
                    <CardMembre
                        nom={membre.nom}
                        prenom={membre.prenom}
                        fonction={membre.fonction}
                        details={membre.details}
                        img={membre.img}
                    />
                </div>
            )
        })
    }
    render() {
        return (
            <Col>
                <p className="titreAccueilF">
                    Le Bureau éxécutif
                    <hr />
                </p>

                <p className="presentation">
                    Le Bureau est l'organe exécutif de la Fédération, il est chargé du bon
                    déroulement des activités fédérales dans le respect des statuts et du
                    règlement intérieur. Il est composé des fonctions suivantes:
                </p>
                <div className="presentation">
                    <ul className="c">
                        <li> Un Président, </li>
                        <li> Trois (03) Vice Présidents, </li>
                        <li> Un Secrétaire général, </li>
                        <li> Un Trésorier général, </li>
                        <li> et Un Directeur technique national avec voix consultative. </li>
                    </ul>
                </div>
                <hr className="separator" />
                <p className="titreAccueil">
                    Un bureau exécutif bénévole et dynamique
                </p>
                <div className="row">
                                        <div className="col-1">
                                            
                                        </div>
                                        <div className="col">
                                            <img src={require(`../../assets/bureau/${this.state.membres[0].img}`)} className='imgJudoPresentationPresident' alt="image2" />
                                            <p style={{ fontWeight: 'bold', color: '#000' }}>
                                                <b>Babacar Makhtar WADE</b>
                                            </p>
                                            <p className="profileClubName">Président</p>
                                            <p style={{ fontSize: 12, color: '#000' }}>
                                                <i>Expert-comptable</i> <br />
                                                <i>Président de la Fédération Sénégalaise de Judo</i> <br />
                                                <i>Trésorier Général du CNOSS (Comité National Olympique Sénégalais)</i> <br />
                                                <i>Coordonnateur adjoint Jeux Olympiques de la Jeunesse JOJ DAKAR 2022</i> <br />
                                            </p>
                                        </div>
                                        <div className="col-1">
                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={require(`../../assets/bureau/${this.state.membres[1].img}`)} className='imgJudoPresentationGroupe' alt="image2" />
                                            <p style={{ fontWeight: 'bold', color: '#000' }}>
                                                <b>Ababacar NGOM</b>
                                            </p>
                                            <p className="profileClubName">Vice-président</p>
                                            <p style={{ fontSize: 12, color: '#000' }}>
                                                <i>Chef d’entreprise</i> <br />
                                                <i>Directeur en chef de l’Arbitrage Africain</i> <br />
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <img src={require(`../../assets/bureau/${this.state.membres[2].img}`)} className='imgJudoPresentationGroupe' alt="image2" />
                                            <p style={{ fontWeight: 'bold', color: '#000' }}>
                                                <b>Seydou Nourou TOURE</b>
                                            </p>
                                            <p className="profileClubName">Vice-président</p>
                                            <p style={{ fontSize: 12, color: '#000' }}>
                                                <i>Major, CN 8ème DAN</i> <br />
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <img src={require(`../../assets/bureau/${this.state.membres[3].img}`)} className='imgJudoPresentationGroupe' alt="image2" />
                                            <p style={{ fontWeight: 'bold', color: '#000' }}>
                                                <b>Nafissatou GUEYE</b>
                                            </p>
                                            <p className="profileClubName">Vice-présidente</p>
                                            <p style={{ fontSize: 12, color: '#000' }}>
                                                <i>MBA, manager sportif</i> <br />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={require(`../../assets/bureau/${this.state.membres[4].img}`)} className='imgJudoPresentationGroupe' alt="image2" />
                                            <p style={{ fontWeight: 'bold', color: '#000' }}>
                                                <b>El Hadji Massata DIAKHATE</b>
                                            </p>
                                            <p className="profileClubName">Secrétaire Général</p>
                                            <p style={{ fontSize: 12, color: '#000' }}>
                                                <i>Cadre financier</i> <br />
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <img src={require(`../../assets/bureau/${this.state.membres[5].img}`)} className='imgJudoPresentationGroupe' alt="image2" />
                                            <p style={{ fontWeight: 'bold', color: '#000' }}>
                                                <b>Cheikh Tidiane FALL</b>
                                            </p>
                                            <p className="profileClubName">Trésorier Général</p>
                                            <p style={{ fontSize: 12, color: '#000' }}>
                                                <i>Gestionnaire</i> <br />
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <img src={require(`../../assets/bureau/${this.state.membres[6].img}`)} className='imgJudoPresentationGroupe' alt="image2" />
                                            <p style={{ fontWeight: 'bold', color: '#000' }}>
                                                <b>Cheikh Sadibou NDIAYE</b>
                                            </p>
                                            <p className="profileClubName">Directeur Technique National</p>
                                            <p style={{ fontSize: 12, color: '#000' }}>
                                                <i>Enseignant Chercheur</i> <br />
                                            </p>
                                        </div>
                                    </div>
                               
            </Col>
        )
    }
}