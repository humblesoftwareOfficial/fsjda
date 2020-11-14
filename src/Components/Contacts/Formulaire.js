import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import {Button} from 'antd'
export default class Formulaire extends Component {
    render() {
        return (
            <Form >
                <h3>Ecrivez-nous</h3>
                <Form.Group controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Votre email" />
                    <Form.Text className="text-muted">
                       <small style={{color: '#000'}}> 
                        Cette adresse pourrait être utilisé pour répondre à votre message (Si nécessaire)
                       </small>
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="5" placeholder="Votre message"/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
        )
    }
}
