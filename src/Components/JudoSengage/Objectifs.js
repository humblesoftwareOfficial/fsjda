import React, {Component} from 'react'
import { Card } from 'react-bootstrap'
import {Row, Col} from 'antd'
export default class Objectifs extends Component {

    render() {
        return(
            <div className="contentTrouverClub">
                <p className="titreAccueil">
                    Objectifs
                </p>
                <p className="titre">
                    Marquer notre présence auprès des populations que ce soit en zone de conflits 
                    ou en zone urbaine sensible.
                </p>
                <Row>
                    <Col>
                    <Card style={{marginBottom: 5, backgroundColor:'#42d9ff'}}>
                        <Card.Body>
                            <p className="presentationObjectifs">
                                Contribuer à l’éducation des jeunes grâce au sport en leur faisant 
                                découvrir le judo et en les y initiant.
                            </p>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginBottom: 5, backgroundColor:'#f770eb'}}>
                        <Card.Body>
                        <p className="presentationObjectifs">
                            Créer un lien social et transmettre des valeurs humaines et le  
                            code moral que cet art martial véhicule.
                        </p>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginBottom: 5, backgroundColor:'#face0c'}}>
                        <Card.Body>
                        <p className="presentationObjectifs">
                            Promouvoir la paix dans notre société et mieux participer 
                            au développement. <br/><br/>
                        </p>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}