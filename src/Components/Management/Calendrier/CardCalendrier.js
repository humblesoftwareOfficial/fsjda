import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Row, Col } from 'antd'
import localisation from '../../../assets/localisation.png'
import calendrier from '../../../assets/calendrier.png'
import './design.css'
export default class CardCalendrier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heure: "",
            minute: ""
        }
    }
    componentDidMount() {
        try {
            if(this.props.evenement.date.heure.length > 0 && this.props.evenement.date.heure !== "00") {
                this.setState({
                    heure: this.props.evenement.date.heure + "H",
                    minute: this.props.evenement.date.minute,
                })
            } else {

            }
        } catch (err) {
            
        }
    }
    render() {
        return (
            <Card style={{ marginBottom: 10, backgroundColor: '#FFF' }}>
                <Card.Body>
                    <Row>
                        <Col span={18}>
                            <p className="titreCalendrier">{this.props.evenement.libelle.toUpperCase()}</p>
                            <p>
                                <img src={calendrier} className='imgProfileClub calendrier' alt="image1" />
                                {this.props.evenement.date.jour + "/" + this.props.evenement.date.mois + "/" + this.props.evenement.date.annee}
                                {" Début: " + this.state.heure + ":" +this.state.minute}
                            </p>
                        </Col>
                        
                        <Col className="LieuEv">
                            <p>
                                <img src={localisation} className='imgProfileClub' alt="image1" />
                                {this.props.evenement.lieu}
                            </p>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}