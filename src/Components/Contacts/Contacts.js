import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import Formulaire from './Formulaire'
import ContactezNous from './ContactezNous'
import Utils from '../../Utils/detectDevice'
import './design.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: ''
        }
    }
    componentDidMount() {
        this.setState({
            device: Utils.DetectDevice()
        })
    }
    render() {
        return (
            <Layout style={{ backgroundColor: '#FFF0' }}>
                {
                    this.state.device === 'MOBILE' ?
                        (
                            <Row>
                                
                                <Col>
                                    <div className="contentContact">
                                        <div className="contentContactSection">
                                            <ContactezNous />
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="contentContact">
                                        <div className="contentContactSection">
                                            <Formulaire />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    ):
                    (
                <Row>
                <Col span={12}>
                        <div className="contentContact">
                            <div className="contentContactSection">
                                <ContactezNous />
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="contentContact">
                            <div className="contentContactSection">
                                <Formulaire />
                            </div>
                        </div>
                    </Col>
                </Row>
                    )
                }
            </Layout>
        )
    }
}
