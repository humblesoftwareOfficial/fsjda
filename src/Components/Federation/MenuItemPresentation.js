import React, { Component } from 'react'
import {Card, Col} from 'antd'
import './design.scss'
export default class MenuItemPresentation extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
    }
    onClick() {
        this.props.OnSubMenuClicked(this.props.menu.key, this.props.menu.name)
    }
    render() {
        return (
            <Card style={{ marginBottom: 5, backgroundColor: this.props.active ? "#f8f3da" : "#face0c" }} className="hand cardBorder" 
                onClick={this.onClick}>
                <Col>
                    <p className="competitionName">
                        {this.props.menu.name} 
                    </p>
                </Col>
            </Card>
        )
    }
}
