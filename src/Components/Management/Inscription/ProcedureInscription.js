import React, { Component } from 'react'
import { Layout, Row, Col, } from 'antd'
import './design.scss'
import judo from '../../../assets/fsjda/judo.png'
import federation from '../../../assets/fsjda/logoFsjda.png'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class ProcedureInscription extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.linkClicked = this.linkClicked.bind(this)
    }
    linkClicked(key) {
        this.props.linkClicked(key)
    }
    render() {
        return (
            <Layout style={{ backgroundColor: '#FFF0' }} >
                <Row>
                    <Col >
                        <div className={this.props.device ? "contentLigueMobile" : ""}>
                            <p className="titreAccueilF">
                                Devenir licencié
                                <hr />
                            </p>

                            <p className="presentation">
                                Pour vous inscrire et devenir licencié, vous pouvez rentrer en contact directement avec {" "}
                                <b style={{ fontWeight: 'bold', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                                    onClick={e => this.linkClicked(2)}
                                >
                                    le club de votre choix
                                </b>
                                {" "} suivant sa localisation, ou remplir le {" "}
                                <b style={{ fontWeight: 'bold', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                                    onClick={e => this.linkClicked(3)}
                                >
                                    formulaire
                                </b>
                                {" "}pour que la Fédération vous contacte et vous assiste dans votre
                                démarche.
                            </p>
                            <p className="presentation">
                                La souscription comprend le coût de la licence annuelle,
                                plus la souscription à une assurance qui couvre chaque licencié.
                            </p>
                            <p className="presentation">
                                <b style={{ fontWeight: 'bold' }}>Procédure de prise en charge pour l'assurance:</b> <br />
                                En cas d'accident, le club prend en charge l'athlète,
                                puis envoie une déclaration d'accident dans les 48 heures
                                adressée à l'assureur. Par la suite, l'ensemble des factures liées
                                au traitement pourront être envoyées en vue du remboursement par
                                l'assureur dans les meilleurs délais.
                            </p>
                            <p className='titreProcedureInscription'>
                                <img src={judo} className='imgJudo' alt="image1" />
                                    Dossier d'inscription
                                <img src={federation} className='imgJudo' alt="image2" />
                            </p>
                            <small style={{ fontSize: 10 }}>Documents à fournir</small>
                            <div className="rcorner">
                                <p className="presentation">
                                    1 -) Une copie de la pièce d’identité (ou extrait de naissance pour les mineurs non détenteurs de pièce d’identité)
                                </p>
                                <p className="presentation">
                                    2 -)	Trois (3) photos d'identité
                                </p>
                                <p className="presentation">
                                    3 - ) un certificat médical d'aptitude au sport
                                </p>
                                <p className="presentation">
                                    4 - ) le coût de la licence annuelle qui comprend l'assurance
                                    (fixée par la Fédération à 5 000 pour les moins de 15 ans,
                                    6 000 pour les ceintures de couleur et 8 000 pour les ceintures noires),
                                    les autres frais,
                                    les droits d'inscription par club et la mensualité sont laissés à la discrétion du club
                                    et ils peuvent varier en fonction du club
                                </p>
                                <p className="presentation">
                                    5 - ) Pour l'affiliation des clubs, le coût annuel est fixé à 15 000 FCFA
                                </p>
                                <p className="presentation ">
                                    <small className="itemNb">
                                        <i>NB: </i>
                                Au delà de ces tarifs, chaque ligue est libre d'appliquer un tarif
                                supérieur aux licences et affiliations clubs pour couvrir
                                tout ou une partie de ses frais.
                                </small>
                                </p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Layout>
        )
    }
}
