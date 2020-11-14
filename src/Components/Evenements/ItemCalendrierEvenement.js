import React, { Component } from 'react'
import { Col } from 'antd'
export default class ItemCalendrierEvenement extends Component {
    render() {
        return (
            <>
                <Col span={24}>
                    <div className="contentEvenement">
                        <td>
                        <span className="dotCalendrier">
                            <b className="textDateCalendrier">{this.props.evenement.date.jour}</b>
                        </span>
                        </td>
                        <td>
                            <b className="titreEvenement"> {this.props.evenement.libelle.toUpperCase()}</b>
                        </td>
                    </div>
                    <hr className="separatorEvenement" />
                </Col>
            </>
        )
    }
}
