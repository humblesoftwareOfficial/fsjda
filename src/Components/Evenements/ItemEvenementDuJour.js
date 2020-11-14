import React, { Component } from 'react'

export default class ItemEvenementDuJour extends Component {
    render() {
        return (
            <div className="today">
                <span className="evenement pointer">
                    {this.props.evenement.libelle + '(' + this.props.evenement.lieu + ')'}
                </span>
            </div>
        )
    }
}
