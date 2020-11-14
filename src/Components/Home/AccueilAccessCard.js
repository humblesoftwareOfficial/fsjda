import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { MDBBtn } from "mdbreact";
import { Row, Col } from 'antd'
import sinscrire from '../../assets/fsjda/sinscrire.jpg'
import dojo from '../../assets/fsjda/dojo.jpg'
import palmares from '../../assets/fsjda/palmares.jpg'
import 'mdbreact/dist/css/mdb.css';
export default class AccueilAccessCard extends Component {

    render() {
        return (
            <div className="contentAccessRapide">
                <Row>
                    <Col span={8}>
                        <Link to="/inscription" className="zoom">
                        <Card className="">
                            <Card.Img src={sinscrire} alt="Card image" style={{width: '100%'}}/>
                            
                            <MDBBtn color="black" size="lg">
                                Je m'inscris
                            </MDBBtn>
                        </Card>
                        </Link>
                    </Col>
                    <Col span={8}>
                    <Link to="/clubs" style={{color: "#FFF"}} className="zoom">
                        <Card className="">
                            <Card.Img src={dojo} alt="Card image" />
                            <MDBBtn color="unique" size="lg">
                                Trouver un club 
                            </MDBBtn>
                        </Card>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Link to="/palmares" className="zoom">
                        <Card >
                            <Card.Img src={palmares} alt="Card image" />
                            
                            <MDBBtn color="amber" size="lg">Accéder au palmares</MDBBtn>
                        </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        )
    }
}