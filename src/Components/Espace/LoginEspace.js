import React, { Component } from 'react'
import Header from '../Utils/Header'
import Partenaires from '../Partenaires/Partenaires'
import SocialNetwork from '../Home/SocialNetworks'
import Footer from '../Utils/Footer'
import { Layout } from 'antd'
import { Form, Row, Col } from 'react-bootstrap'
import { MDBBtn } from "mdbreact";
import './design.scss'
import FjsdaImage from '../Proprio/FskdaImage'
export default class LoginEspace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        }
    }
    render() {
        return (
            <Layout className="background">
                <Header active="espace" />
                <div className="contentPrésentationMenu">
                    <p className='titre'>
                        IDENTIFICATION
                    </p>

                    <Form className="loginContentWeb" id="3">
                        <div className="row">
                            <div className="col-9">
                                <small style={{ fontSize: 10 }}>
                                    Veuillez renseigner vos informations d'identification SVP!
                                </small>
                                <Form.Group controlId="login" as={Row}>
                                    <Form.Label column sm="2">
                                        Code
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control size="sm" type="text" placeholder="" />
                                    </Col>
                                </Form.Group>
                                <Form.Group controlId="login" as={Row}>
                                    <Form.Label column sm="2">
                                        Login
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control size="sm" type="text" placeholder="" />
                                    </Col>
                                </Form.Group>
                                <Form.Group controlId="login" as={Row}>
                                    <Form.Label column sm="2">
                                        Mot de Passe
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control size="sm" type="password" placeholder="" />
                                    </Col>
                                </Form.Group>
                                <MDBBtn color="black" size="sm">
                                    Connexion
                                </MDBBtn>
                            </div>
                            <div className="col">
                                <FjsdaImage/>
                            </div>
                        </div>
                    </Form>
                </div>
                <SocialNetwork />
                <Partenaires />
                <Footer />
            </Layout>
        )
    }
}