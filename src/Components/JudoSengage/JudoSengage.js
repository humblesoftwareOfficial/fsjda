import React, { Component } from 'react'
import Header from '../Utils/Header'
import Footer from '../Utils/Footer'
import Partenaires from '../Partenaires/Partenaires'
import { Row, Col, Layout } from 'antd'
import accueil from '../../assets/judosengage/accueil.png'
import initiation from '../../assets/judosengage/initiation.png'
import codemoral from '../../assets/judosengage/codemoral.png'
import paix from '../../assets/judosengage/paix.png'
import casamance from '../../assets/judosengage/casamance.png'
import prison from '../../assets/judosengage/prison.png'
import educqtion from '../../assets/judosengage/educqtion.png'
import talibes from '../../assets/judosengage/talibes.png'
import elles from '../../assets/judosengage/elles.png'
import centre from '../../assets/judosengage/centre.png'
import Animation from './Animation'
import { Card, } from 'react-bootstrap'
import Utils from '../../Utils/detectDevice'
import './program.scss'
import './design.css'
import SocialNetwork from '../Home/SocialNetworks'
export default class JudoSengage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: ''
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({
            device: Utils.DetectDevice()
        })
    }
    render() {
        return (
            <Layout className="background">
                <Header active="judo" />
                <Row>
                <Col >
                        <img src={accueil} alt="ac" className="imgAccueil" />
                    </Col>
                    <Col >
                        <Animation />
                    </Col>
                    
                </Row>   
                <Row >
                    <Col span={8}>
                        <div className="contentTrouverClub">
                            <Card style={{ marginBottom: 5, backgroundColor: 'rgb(22, 42, 58)', height: '25rem' }}>
                                <Card.Body>
                                    <p className="presentationJudoSengage">
                                        Contribuer à l’éducation des jeunes grâce au sport en leur
                                        faisant découvrir le judo et en les y initiant.
                                    </p>
                                    <img src={initiation} alt="initiation" className="imgProgramme"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="contentTrouverClub">
                        <Card style={{ marginBottom: 5, backgroundColor: 'rgb(22, 42, 58)', height: '25rem' }}>
                                <Card.Body>
                                    <p className="presentationJudoSengage">
                                    Créer un lien social et transmettre des valeurs humaines et 
                                    le  code moral que cet art martial véhicule.
                                    <br/>
                                    <br/>
                                </p>
                                <img src={codemoral} alt="initiation" className="imgProgramme"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="contentTrouverClub">
                        <Card style={{ marginBottom: 5, backgroundColor: 'rgb(22, 42, 58)', height: '25rem'}}>
                                <Card.Body>
                                    <p className="presentationJudoSengage">
                                    Promouvoir la paix dans notre société et mieux participer 
                                    au développement.
                                    <br/>
                                    <br/>
                                </p>
                                <img src={paix} alt="initiation" className="imgProgramme"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <div className={this.state.device === 'MOBILE' ? "": "contentEvenementFsjda"}>
                    <Row>
                        <br/>
                        <p className="titreAccueil">
                            PROGRAMME
                        </p>
                        <hr className="separator" />
                        <Col span={8}>
                            <div className="contentTrouverClub">
                                <Card style={{ marginBottom: 5, backgroundColor: '#FFF', minHeight: '26rem'  }}>
                                    <Card.Body>
                                    <img src={casamance} alt="initiation" className="imgProgramme"/>
                                        <p className="presentationJudoSengageProgramme">
                                            Judo pour la paix en Casamance
                                        </p>
                                        <p className="presentationJudoSengageProgrammeDesc">
                                            Amener les gens à être très actifs dans la recherche, la promotion et la 
                                            consolidation de la paix et, particulièrement, utiliser le Judo pour 
                                            promouvoir la paix en Casamance.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="contentTrouverClub">
                                <Card style={{ marginBottom: 5, backgroundColor: '#FFF', minHeight: '26rem'  }}>
                                    <Card.Body>
                                    <img src={prison} alt="initiation" className="imgProgramme"/>
                                        <p className="presentationJudoSengageProgramme">
                                            Judo dans nos Prisons 
                                        </p>
                                        <p className="presentationJudoSengageProgrammeDesc">
                                            Pratiquer le judo en milieu carcéral 1 fois par semaine, plus particulièrement avec les
                                            femmes et les mineurs. 
                                            <br/> <br/> <br/><br/>
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col span={8}>
                        <div className="contentTrouverClub">
                            <Card style={{ marginBottom: 5, backgroundColor: '#FFF', minHeight: '26rem'  }}>
                                <Card.Body>
                                <img src={educqtion} alt="initiation" className="imgProgramme"/>
                                    <p className="presentationJudoSengageProgramme">
                                        Judo for Education 
                                    </p>
                                    <p className="presentationJudoSengageProgrammeDesc">
                                        Ajouter de la valeur à la société et renforcer les initiatives existantes pour les 
                                        jeunes et le Judo.
                                         <br/> <br/> <br/> <br/><br/>
                                    </p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>   
                    </Row>
                    <Row>
                    <Col span={8}>
                        <div className="contentTrouverClub">
                            <Card style={{ marginBottom: 5, backgroundColor: '#FFF',minHeight: '26rem'}}>
                                <Card.Body>
                                <img src={talibes} alt="initiation" className="imgProgramme"/>
                                    <p className="presentationJudoSengageProgramme">
                                        Judo for Kids
                                    </p>
                                    <p className="presentationJudoSengageProgrammeSubTitle">
                                        (Judo avec les enfants de la rue "Talibés")
                                    </p>
                                    <p className="presentationJudoSengageProgrammeDesc">
                                        Donner l’opportunité aux enfants de la rue de faire du Judo, manger, 
                                        boire et s’habiller décemment.
                                    </p>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="contentTrouverClub">
                            <Card style={{ marginBottom: 5, backgroundColor: '#FFF', minHeight: '26rem'  }}>
                                <Card.Body>
                                <img src={centre} alt="initiation" className="imgProgramme"/>
                                    <p className="presentationJudoSengageProgramme">
                                        Judo for Kids
                                    </p>
                                    <p className="presentationJudoSengageProgrammeSubTitle">
                                        (Judo sans handicap) 
                                    </p>
                                    <p className="presentationJudoSengageProgrammeDesc">
                                        Permettre, à tous les enfants souffrant d'un
                                        handicap de pratiquer le judo et d'en tirer un grand avantage pour une 
                                        meilleure intégration sociale.
                                    </p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>                   
                    <Col span={8}>
                        <div className="contentTrouverClub">
                            <Card style={{ marginBottom: 5, backgroundColor: '#FFF', minHeight: '26rem'}}>
                                <Card.Body>
                                <img src={elles} alt="initiation" className="imgProgramme"/>
                                    <p className="presentationJudoSengageProgramme">
                                        Judo pour Elles
                                    </p>
                                    <p className="presentationJudoSengageProgrammeDesc">
                                        Renforcer la pratique du judo chez les femmes et les jeunes filles 
                                        en milieu défavorisé, dans les prisons et dans les écoles 
                                        pour filles. 
                                    </p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>   
                </Row>
                </div>
                <SocialNetwork/>
                <Partenaires />
                <Footer />
            </Layout>
        )
    }
}

/*
<Col >
                        <img src={accueil} alt="ac" className="imgAccueil" />
                    </Col>
                    
*/