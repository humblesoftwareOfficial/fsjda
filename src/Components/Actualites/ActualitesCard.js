import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
export default class ActualitesCard extends Component {
    render() {
        return (
            <Card style={{marginBottom: 5, backgroundColor:'rgb(247, 238, 187)'}}>
                <Card.Body>
                        <small style={{color: '#000'}}>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                            {' '}
                        </small>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                </Card.Body>
            </Card>
        )
    }
}
