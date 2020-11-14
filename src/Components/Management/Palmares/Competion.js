import React, { Component } from 'react'
import {Card, Col} from 'antd'
import './design.scss'
export default class Competion extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
    }
    onClick() {
        this.props.onCompetitionClicked(this.props.competition.code, this.props.competition.libelle, this.props.competition._id)
    }
    render() {
        return (
            <Card style={{ marginBottom: 5, backgroundColor: this.props.active ? "#f8f3da" : "#face0c" }} className="hand cardBorder" 
                onClick={this.onClick}>
                <Col>
                    <p className="competitionName">
                        {this.props.competition.libelle} 
                    </p>
                    <small>{this.props.competition.lieu}</small>
                </Col>
            </Card>
        )
    }
}
