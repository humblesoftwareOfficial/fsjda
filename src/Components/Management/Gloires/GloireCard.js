import React, { Component } from 'react'
import {Card, Col} from 'antd'
import './design.scss'
export default class GloireCard extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
    }
    onClick() {
        this.props.OnSubMenuClicked(this.props.id)
    }
    render() {
        return (
            <Card style={{ marginBottom: 5, backgroundColor: "#021930" }} className="hand cardBorder" 
                onClick={this.onClick}>
                <Col>
                    <p className="gloireName">
                        {this.props.prenom + ' ' + this.props.nom}
                    </p>
                    
                </Col>
            </Card>
        )
    }
}
