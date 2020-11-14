import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
export default class AlbumCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onAlbumSelect = this.onAlbumSelect.bind(this)
    }
    onAlbumSelect() {
        this.props.onAlbumSelect(this.props.album)
    }
    render() {
        return (
            <Col className="hand">
               <Card style={{ marginBottom: 5, backgroundColor: this.props.active ? "#f8f3da" : "#face0c"}} onClick={this.onAlbumSelect}>
                   <Card.Body>
                       <p className="competitionName">{this.props.video.libelle}</p>
                   </Card.Body>
               </Card> 
            </Col>
        )
    }
}
