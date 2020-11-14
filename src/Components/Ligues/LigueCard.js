import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
export default class AlbumCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onLigueSelect = this.onLigueSelect.bind(this)
    }
    onLigueSelect() {
        this.props.onLigueSelect(this.props.ligue)
    }
    render() {
        return (
            <Col className="hand">
               <Card style={{ marginBottom: 5, backgroundColor: this.props.active ? "#f8f3da" : "#face0c"}} onClick={this.onLigueSelect} className="cardBorder">
                   <Card.Body>
                       <p className="competitionName">{this.props.ligue.libelle}</p>
                   </Card.Body>
               </Card> 
            </Col>
        )
    }
}
