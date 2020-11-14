import React, { Component } from 'react'
import { Card,  } from 'react-bootstrap'
import {Row, Col} from 'antd'
import { MDBBtn } from "mdbreact";
import 'mdbreact/dist/css/mdb.css'
import './program.scss'
import programme from './Programme_le_judo_s_engage.pdf'
export default class Programme extends Component {

    render() {
        return (
            <div className="contentTrouverClub">
                <p className="titreAccueil">
                    Programme
                </p>
                <Row>
                    <Col>
                        <Card style={{marginBottom: 5, backgroundColor:'#ddc1d8'}}>
                            <Card.Body>
                            <p className="presentation">
                                Transcender les genres, les croyances, l’âge, la condition physique.
                               
                            </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{marginBottom: 5, backgroundColor:'#ddc1d8'}}>
                            <Card.Body>
                            <p className="presentation">
                                Rencontrer et regrouper des communautés, des enfants et des femmes à travers 
                                les principes moraux incarnés par le Judo. 
                            </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{marginBottom: 5, backgroundColor:'#ddc1d8'}}>
                            <Card.Body>
                            <p className="presentation">
                                Contribuer à la moralisation d’une société meilleure par le sport, et 
                                faire tomber des barrières.
                            </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                <div className="bodyProgramme">
                    <div className="frame">
                        <div className="picture"></div>
                        <a href={programme} download>
                            <MDBBtn color="unique" size="lg">Télécharger le programme complet</MDBBtn>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}